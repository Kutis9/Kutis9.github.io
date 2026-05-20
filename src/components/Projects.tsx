import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ClipboardList, Palette, ShoppingBag, X, ShoppingCart, Plus, Minus,
  Layers, Box, Wrench, CheckCircle2, Circle, Clock,
  LayoutDashboard, Users, Settings, Play, Folder, Package, Search, Truck,
  Moon, Sun, Copy, Check, Code2, AlertCircle, Info, ToggleLeft, ArrowLeft, Send, Trash2, Calendar,
} from 'lucide-react';

// ─── ECOMMERCE APP ────────────────────────────────────────────────────────────

type CartItem = { id: string; name: string; price: number; qty: number };

const PRODUCTS = [
  { id: '1', name: 'Steel Beam HEA 120', price: 124.50, category: 'Structural', icon: <Layers className="w-8 h-8" />, desc: 'Hot-rolled steel, 6m length', stock: 48 },
  { id: '2', name: 'Stainless Sheet 2mm', price: 89.00, category: 'Sheets', icon: <Package className="w-8 h-8" />, desc: 'AISI 304, 1000×2000mm', stock: 23 },
  { id: '3', name: 'Angle Iron 40×40', price: 45.90, category: 'Profiles', icon: <Box className="w-8 h-8" />, desc: 'S235 grade, 3m pieces', stock: 120 },
  { id: '4', name: 'Galvanized Tube Ø50', price: 67.20, category: 'Profiles', icon: <Wrench className="w-8 h-8" />, desc: 'DIN 2394, 6m length', stock: 35 },
  { id: '5', name: 'Aluminum Plate 5mm', price: 156.00, category: 'Sheets', icon: <Layers className="w-8 h-8" />, desc: 'EN AW-6082, 500×1000mm', stock: 12 },
  { id: '6', name: 'IPE 200 Steel Beam', price: 98.80, category: 'Structural', icon: <Box className="w-8 h-8" />, desc: 'S355 grade, 12m length', stock: 67 },
];

const FREE_SHIPPING_THRESHOLD = 200;

function EcommerceApp() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  type CheckoutStep = 'cart' | 'form' | 'success';
  interface Toast { id: number; message: string; }
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('cart');
  const [orderForm, setOrderForm] = useState({ company: '', email: '', country: 'Slovakia' });
  const [orderNumber, setOrderNumber] = useState('');
  const [formError, setFormError] = useState('');
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ product: PRODUCTS[0].name, qty: 1, company: '', email: '' });

  const categories = ['All', 'Structural', 'Sheets', 'Profiles'];
  const filtered = PRODUCTS.filter(p =>
    (activeCategory === 'All' || p.category === activeCategory) &&
    (searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - totalPrice);
  const shippingProgress = Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100);

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      const toastId = Date.now();
      setToasts(prevToasts => [...prevToasts, { id: toastId, message: `${product.name.slice(0, 22)} added to cart` }]);
      setTimeout(() => setToasts(prevToasts => prevToasts.filter(t => t.id !== toastId)), 2000);
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) =>
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  const inCart = (id: string) => cart.some(i => i.id === id);
  const isOrderFormValid = orderForm.company.trim().length > 0 && orderForm.email.includes('@');

  const closeCart = () => {
    setCartOpen(false);
    setCheckoutStep('cart');
    setFormError('');
  };

  const closeQuote = () => {
    setQuoteOpen(false);
    setQuoteSent(false);
  };

  const resetQuoteForm = () => {
    setQuoteOpen(false);
    setQuoteSent(false);
    setQuoteForm({ product: PRODUCTS[0].name, qty: 1, company: '', email: '' });
  };

  const placeOrder = () => {
    if (!isOrderFormValid) {
      setFormError('Please fill company name and a valid email.');
      return;
    }
    setFormError('');
    setOrderNumber(Math.floor(100000 + Math.random() * 900000).toString());
    setCheckoutStep('success');
  };

  const sendQuote = () => {
    if (quoteForm.company.trim() && quoteForm.email.includes('@')) {
      setQuoteSent(true);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative overflow-hidden" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* App Header */}
      <div className="bg-[#0f172a] text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Wrench className="w-4 h-4 text-white" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-sm">MetalFab</span>
            <span className="text-orange-400 font-bold text-sm"> SK</span>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <span className="text-white font-semibold border-b-2 border-orange-400 pb-0.5 cursor-default">Products</span>
          <span className="text-slate-400 hover:text-white cursor-default transition-colors">About</span>
          <span className="text-slate-400 hover:text-white cursor-default transition-colors">Contact</span>
        </nav>
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">Cart</span>
          {totalItems > 0 && (
            <motion.span
              key={totalItems}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold"
            >
              {totalItems}
            </motion.span>
          )}
        </button>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0f172a] via-[#1a2744] to-[#0f172a] px-4 py-3 flex items-center justify-between flex-shrink-0 border-b border-orange-500/20">
        <div className="border-l-4 border-orange-500 pl-3">
          <p className="text-white font-bold text-sm leading-tight">Premium Steel & Metal Products</p>
          <p className="text-slate-400 text-[11px] mt-0.5">B2B supply across Slovakia & EU</p>
        </div>
        <button
          onClick={() => setQuoteOpen(true)}
          className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold rounded-lg cursor-pointer transition-colors whitespace-nowrap"
        >
          Request Quote
        </button>
      </div>

      {/* Category Filter + Search */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2 flex-shrink-0 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
              activeCategory === cat
                ? 'bg-[#0f172a] text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
        <div className="relative ml-auto flex-shrink-0">
          <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-28 sm:w-36 bg-white border border-slate-200 rounded-full pl-7 pr-2.5 py-1 text-[11px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
          />
        </div>
        <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0">{filtered.length} items</span>
      </div>

      {/* Product Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
            <p className="text-sm font-medium">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filtered.map(product => (
              <motion.div
                key={product.id}
                layout
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-orange-200 transition-all duration-200 group"
              >
                <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 p-4 flex items-center justify-center text-slate-300 h-20">
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {product.icon}
                  </div>
                  {product.stock < 15 && (
                    <span className="absolute top-1.5 right-1.5 text-[9px] bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full font-bold leading-none">
                      Low Stock
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="font-semibold text-slate-900 text-xs leading-tight">{product.name}</p>
                  <p className="text-slate-400 text-[10px] mt-0.5 leading-relaxed">{product.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-orange-600 font-bold text-sm">€{product.price.toFixed(2)}</span>
                    <span className="text-[10px] text-slate-400">{product.stock} pcs</span>
                  </div>
                  <div className="mt-1.5 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-400 rounded-full"
                      style={{ width: `${Math.min((product.stock / 120) * 100, 100)}%` }}
                    />
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className={`mt-2.5 w-full py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      inCart(product.id)
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {inCart(product.id) ? '✓ In Cart' : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 z-10"
              onClick={closeCart}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl z-20 flex flex-col"
            >
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2">
                  {checkoutStep === 'form' && (
                    <button
                      onClick={() => { setCheckoutStep('cart'); setFormError(''); }}
                      className="p-1 -ml-1 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 text-slate-600" />
                    </button>
                  )}
                  <ShoppingCart className="w-4 h-4 text-slate-600" />
                  <h3 className="font-bold text-slate-900 text-sm">
                    {checkoutStep === 'form' ? 'Shipping Details' : 'Shopping Cart'}
                  </h3>
                  {checkoutStep === 'cart' && totalItems > 0 && (
                    <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{totalItems}</span>
                  )}
                </div>
                <button onClick={closeCart} className="p-1.5 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors">
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {checkoutStep === 'cart' ? (
                    <motion.div
                      key={checkoutStep}
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -24, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex flex-col"
                    >
                      <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                        {cart.length === 0 ? (
                          <div className="text-center py-10 text-slate-400">
                            <ShoppingCart className="w-10 h-10 mx-auto mb-2 opacity-20" />
                            <p className="text-sm font-medium">Cart is empty</p>
                            <p className="text-xs mt-1">Add products from the catalog</p>
                          </div>
                        ) : (
                          cart.map(item => (
                            <div key={item.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-slate-900 leading-snug">{item.name}</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">€{item.price.toFixed(2)} / pc</p>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span className="text-sm font-bold text-orange-600">€{(item.qty * item.price).toFixed(2)}</span>
                                <div className="flex items-center gap-1">
                                  <button onClick={() => updateQty(item.id, -1)} className="w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded flex items-center justify-center cursor-pointer transition-colors">
                                    <Minus className="w-2.5 h-2.5 text-slate-600" />
                                  </button>
                                  <span className="text-xs font-bold text-slate-900 w-5 text-center">{item.qty}</span>
                                  <button onClick={() => updateQty(item.id, 1)} className="w-5 h-5 bg-slate-200 hover:bg-orange-100 rounded flex items-center justify-center cursor-pointer transition-colors">
                                    <Plus className="w-2.5 h-2.5 text-slate-600" />
                                  </button>
                                  <button onClick={() => removeFromCart(item.id)} className="ml-1 text-[10px] text-slate-400 hover:text-red-500 cursor-pointer transition-colors font-bold">×</button>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      {cart.length > 0 && (
                        <div className="p-4 border-t border-slate-200 space-y-3 bg-slate-50">
                          <div className="space-y-1.5">
                            {remaining > 0 ? (
                              <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                                <Truck className="w-3 h-3 text-slate-400" />
                                €{remaining.toFixed(2)} away from free shipping
                              </p>
                            ) : (
                              <p className="text-[10px] text-emerald-600 font-semibold text-center flex items-center justify-center gap-1">
                                <Truck className="w-3 h-3" />
                                Free shipping unlocked!
                              </p>
                            )}
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                                animate={{ width: `${shippingProgress}%` }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-500">Subtotal</span>
                            <span className="text-lg font-bold text-slate-900">€{totalPrice.toFixed(2)}</span>
                          </div>
                          <button
                            onClick={() => { setCheckoutStep('form'); setFormError(''); }}
                            className="w-full bg-[#0f172a] text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 cursor-pointer transition-colors"
                          >
                            Proceed to Checkout →
                          </button>
                        </div>
                      )}
                    </motion.div>
                  ) : checkoutStep === 'form' ? (
                    <motion.div
                      key={checkoutStep}
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -24, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full overflow-y-auto p-4"
                    >
                      <div className="space-y-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-700">Company Name</label>
                          <input
                            value={orderForm.company}
                            onChange={e => {
                              setOrderForm(prev => ({ ...prev, company: e.target.value }));
                              if (formError) setFormError('');
                            }}
                            placeholder="Your company"
                            className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-700">Email</label>
                          <input
                            value={orderForm.email}
                            onChange={e => {
                              setOrderForm(prev => ({ ...prev, email: e.target.value }));
                              if (formError) setFormError('');
                            }}
                            type="email"
                            placeholder="name@company.com"
                            className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-700">Country</label>
                          <select
                            value={orderForm.country}
                            onChange={e => setOrderForm(prev => ({ ...prev, country: e.target.value }))}
                            className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                          >
                            <option>Slovakia</option>
                            <option>Czech Republic</option>
                            <option>Austria</option>
                            <option>Germany</option>
                            <option>Poland</option>
                            <option>Hungary</option>
                          </select>
                        </div>
                        <button
                          onClick={placeOrder}
                          disabled={!isOrderFormValid}
                          className="w-full bg-[#0f172a] text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Place Order →
                        </button>
                        {formError && <p className="text-xs text-red-500">{formError}</p>}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={checkoutStep}
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -24, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-full p-6 flex flex-col items-center justify-center text-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                      <h4 className="mt-3 text-lg font-bold text-slate-900">Order Confirmed!</h4>
                      <p className="mt-1 text-xs text-slate-500">Order number #{orderNumber}</p>
                      <button
                        onClick={() => {
                          setCartOpen(false);
                          setCheckoutStep('cart');
                          setCart([]);
                          setFormError('');
                        }}
                        className="mt-6 w-full bg-orange-500 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 cursor-pointer transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {quoteOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-30"
              onClick={closeQuote}
            />
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="absolute inset-8 sm:inset-16 bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden max-w-sm mx-auto"
            >
              <AnimatePresence mode="wait">
                {!quoteSent ? (
                  <motion.div
                    key="quote-form"
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -24, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
                      <h4 className="font-bold text-slate-900 text-sm">Request a Quote</h4>
                      <button
                        onClick={closeQuote}
                        className="p-1.5 hover:bg-slate-200 rounded-lg cursor-pointer transition-colors"
                      >
                        <X className="w-4 h-4 text-slate-500" />
                      </button>
                    </div>
                    <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700">Product</label>
                        <select
                          value={quoteForm.product}
                          onChange={e => setQuoteForm(prev => ({ ...prev, product: e.target.value }))}
                          className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                        >
                          {PRODUCTS.map(product => (
                            <option key={product.id} value={product.name}>{product.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700">Quantity</label>
                        <input
                          type="number"
                          min="1"
                          value={quoteForm.qty}
                          onChange={e => {
                            const value = Number.parseInt(e.target.value, 10);
                            setQuoteForm(prev => ({ ...prev, qty: Number.isNaN(value) ? 1 : Math.max(1, value) }));
                          }}
                          className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700">Company Name</label>
                        <input
                          value={quoteForm.company}
                          onChange={e => setQuoteForm(prev => ({ ...prev, company: e.target.value }))}
                          placeholder="Your company"
                          className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-700">Email</label>
                        <input
                          type="email"
                          value={quoteForm.email}
                          onChange={e => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="name@company.com"
                          className="mt-1 w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300"
                        />
                      </div>
                      <button
                        onClick={sendQuote}
                        className="w-full bg-[#0f172a] text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 cursor-pointer transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Request →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="quote-success"
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -24, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full p-6 flex flex-col items-center justify-center text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-orange-500" />
                    <h4 className="mt-3 text-lg font-bold text-slate-900">Quote Sent!</h4>
                    <p className="mt-1 text-xs text-slate-500">We'll contact you within 24 hours.</p>
                    <button
                      onClick={resetQuoteForm}
                      className="mt-6 w-full bg-orange-500 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-orange-600 cursor-pointer transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 z-30 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-xs font-medium"
            >
              <ShoppingCart className="w-3 h-3 text-orange-400 flex-shrink-0" />
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── TASK MANAGER APP ─────────────────────────────────────────────────────────

type Priority = 'high' | 'medium' | 'low';
type TaskStatus = 'todo' | 'doing' | 'done';

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: Priority;
  assignee: string;
  tags: string[];
  dueDate?: string;
}

const PRIORITY_BADGE: Record<Priority, string> = {
  high:   'bg-red-500/20 text-red-400',
  medium: 'bg-amber-500/20 text-amber-400',
  low:    'bg-slate-500/20 text-slate-400',
};

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Design system setup', status: 'done', priority: 'high', assignee: 'LK', tags: ['Design'] },
  { id: '2', title: 'Database schema', status: 'done', priority: 'high', assignee: 'LK', tags: ['Backend'] },
  { id: '3', title: 'Auth API endpoints', status: 'done', priority: 'high', assignee: 'LK', tags: ['API'] },
  { id: '4', title: 'WebSocket server', status: 'doing', priority: 'high', assignee: 'LK', tags: ['Backend'], dueDate: '2026-05-11' },
  { id: '5', title: 'Task board UI', status: 'doing', priority: 'medium', assignee: 'LK', tags: ['Frontend'], dueDate: '2026-05-09' },
  { id: '6', title: 'Real-time sync', status: 'todo', priority: 'high', assignee: 'LK', tags: ['Feature'], dueDate: '2026-05-14' },
  { id: '7', title: 'Email notifications', status: 'todo', priority: 'low', assignee: 'LK', tags: ['Feature'] },
  { id: '8', title: 'Mobile responsive', status: 'todo', priority: 'medium', assignee: 'LK', tags: ['Frontend'], dueDate: '2026-05-08' },
];

function TaskManagerApp() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>('medium');
  const [newTaskDueDate, setNewTaskDueDate] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState('TaskFlow App');
  const [addingTo, setAddingTo] = useState<TaskStatus | null>(null);
  const [flashingTaskId, setFlashingTaskId] = useState<string | null>(null);
  const [celebratingTaskId, setCelebratingTaskId] = useState<string | null>(null);
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');

  const projects = ['TaskFlow App', 'Design System', 'API v2', 'Mobile'];

  const doneTasks = tasks.filter(t => t.status === 'done').length;

  const cols: { key: TaskStatus; label: string; icon: ReactNode; color: string; bg: string }[] = [
    { key: 'todo', label: 'To Do', icon: <Circle className="w-3.5 h-3.5" />, color: 'text-slate-400', bg: 'bg-slate-500/10' },
    { key: 'doing', label: 'In Progress', icon: <Clock className="w-3.5 h-3.5" />, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { key: 'done', label: 'Done', icon: <CheckCircle2 className="w-3.5 h-3.5" />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const move = (id: string, status: TaskStatus) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status } : t));
    setFlashingTaskId(id);
    setTimeout(() => setFlashingTaskId(null), 600);
    if (status === 'done') {
      setCelebratingTaskId(id);
      setTimeout(() => setCelebratingTaskId(null), 700);
    }
  };

  const deleteTask = (id: string) => {
    setDeletingIds(prev => new Set(prev).add(id));
    setTimeout(() => {
      setTasks(prev => prev.filter(t => t.id !== id));
      setDeletingIds(prev => { const s = new Set(prev); s.delete(id); return s; });
    }, 350);
  };

  const addTask = (status: TaskStatus) => {
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [...prev, {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      status,
      priority: newTaskPriority,
      assignee: 'LK',
      tags: [],
      dueDate: newTaskDueDate || undefined,
    }]);
    setNewTaskTitle('');
    setNewTaskPriority('medium');
    setNewTaskDueDate('');
    setAddingTo(null);
  };

  return (
    <div className="flex flex-col h-full" style={{ background: '#0f0e17', fontFamily: 'system-ui, sans-serif' }}>
      {/* App Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-violet-500 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold text-sm tracking-tight">TaskFlow</span>
        </div>
        <nav className="hidden sm:flex items-center gap-1">
          {[
            { icon: <LayoutDashboard className="w-3.5 h-3.5" />, label: 'Board', active: true },
            { icon: <Users className="w-3.5 h-3.5" />, label: 'Team', active: false },
            { icon: <Settings className="w-3.5 h-3.5" />, label: 'Settings', active: false },
          ].map(item => (
            <button
              key={item.label}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-default ${
                item.active ? 'bg-violet-500/20 text-violet-300' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="w-7 h-7 bg-violet-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">LK</div>
      </div>

      {/* Sprint Overview Bar */}
      <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex-shrink-0 flex items-center gap-4">
        <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
          Sprint 3 · May 2026 ·{' '}
          <span className="text-white font-bold">{doneTasks}/{tasks.length}</span>
          {' '}tasks complete
        </span>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-violet-500 rounded-full"
            animate={{ width: `${(doneTasks / tasks.length) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs text-violet-400 font-bold whitespace-nowrap">{Math.round((doneTasks / tasks.length) * 100)}%</span>
      </div>

      {/* Filter Bar */}
      <div className="px-4 py-2 border-b border-white/10 flex-shrink-0 flex items-center gap-2 flex-wrap">
        <div className="relative flex-shrink-0">
          <Search className="w-3 h-3 text-slate-600 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search tasks..."
            className="bg-white/5 border border-white/10 rounded-lg pl-7 pr-2.5 py-1 text-[11px] text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-violet-400 w-32"
          />
        </div>
        <div className="flex gap-1">
          {(['all', 'high', 'medium', 'low'] as const).map(p => (
            <button
              key={p}
              onClick={() => setPriorityFilter(p)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer capitalize ${
                priorityFilter === p
                  ? p === 'all' ? 'bg-violet-500/30 text-violet-300' : PRIORITY_BADGE[p as Priority] + ' ring-1 ring-current'
                  : 'text-slate-600 bg-white/5 hover:bg-white/10'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        {(searchQuery || priorityFilter !== 'all') && (
          <span className="text-[10px] text-slate-600 ml-auto">
            {tasks.filter(t =>
              (priorityFilter === 'all' || t.priority === priorityFilter) &&
              (searchQuery === '' || t.title.toLowerCase().includes(searchQuery.toLowerCase()))
            ).length} of {tasks.length} tasks
          </span>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-36 flex-shrink-0 border-r border-white/10 p-3 flex flex-col gap-1 overflow-y-auto">
          <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider px-2 mb-2">Projects</p>
          {projects.map(p => (
            <button
              key={p}
              onClick={() => setSelectedProject(p)}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                selectedProject === p
                  ? 'bg-violet-500/20 text-violet-300 font-semibold'
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-300'
              }`}
            >
              <Folder className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{p}</span>
            </button>
          ))}
          <div className="mt-4 px-2">
            <div className="border-t border-white/10 pt-4 space-y-3">
              <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider">Progress</p>
              {[
                { label: 'Done', count: tasks.filter(t => t.status === 'done').length, color: 'bg-emerald-500' },
                { label: 'Doing', count: tasks.filter(t => t.status === 'doing').length, color: 'bg-violet-500' },
                { label: 'Todo', count: tasks.filter(t => t.status === 'todo').length, color: 'bg-slate-500' },
              ].map(stat => (
                <div key={stat.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                    <span className="text-[10px] text-slate-500">{stat.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold">{stat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden p-3">
          <div className="flex gap-3 h-full min-w-[480px]">
            {cols.map(col => {
              const colTasks = tasks.filter(t =>
                t.status === col.key &&
                (priorityFilter === 'all' || t.priority === priorityFilter) &&
                (searchQuery === '' || t.title.toLowerCase().includes(searchQuery.toLowerCase()))
              );
              return (
                <div key={col.key} className={`flex-1 flex flex-col min-w-0 rounded-xl overflow-hidden border border-white/5 ${col.bg}`}>
                  {/* Column Header */}
                  <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/10 flex-shrink-0">
                    <div className={`flex items-center gap-1.5 ${col.color}`}>
                      {col.icon}
                      <span className="text-xs font-semibold">{col.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-600 bg-white/10 px-1.5 py-0.5 rounded-full font-medium">{colTasks.length}</span>
                      <button
                        onClick={() => { setAddingTo(col.key); setNewTaskTitle(''); setNewTaskPriority('medium'); setNewTaskDueDate(''); }}
                        className="text-slate-500 hover:text-violet-400 transition-colors cursor-pointer p-0.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Tasks List */}
                  <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {addingTo === col.key && (
                      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="space-y-1.5 bg-white/10 rounded-xl p-2.5 border border-violet-500/30">
                        <input
                          autoFocus
                          value={newTaskTitle}
                          onChange={e => setNewTaskTitle(e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') addTask(col.key);
                            if (e.key === 'Escape') setAddingTo(null);
                          }}
                          placeholder="Task name..."
                          className="w-full bg-white/10 text-white text-xs px-2.5 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-violet-400 placeholder:text-slate-600"
                        />
                        <div className="flex gap-1">
                          {(['high', 'medium', 'low'] as Priority[]).map(p => (
                            <button
                              key={p}
                              onClick={() => setNewTaskPriority(p)}
                              className={`flex-1 text-[9px] font-bold py-1 rounded uppercase cursor-pointer transition-colors ${
                                newTaskPriority === p
                                  ? PRIORITY_BADGE[p] + ' ring-1 ring-current'
                                  : 'text-slate-600 bg-white/5 hover:bg-white/10'
                              }`}
                            >
                              {p.slice(0, 3)}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-1">
                          {[
                            { label: 'Today', value: new Date().toISOString().slice(0, 10) },
                            { label: '+3d', value: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10) },
                            { label: 'None', value: '' },
                          ].map(d => (
                            <button
                              key={d.label}
                              onClick={() => setNewTaskDueDate(d.value)}
                              className={`flex-1 text-[9px] py-1 rounded cursor-pointer transition-colors ${
                                newTaskDueDate === d.value
                                  ? 'bg-violet-500/30 text-violet-300'
                                  : 'bg-white/5 text-slate-600 hover:bg-white/10'
                              }`}
                            >
                              {d.label}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-1">
                          <button onClick={() => addTask(col.key)} className="text-[10px] bg-violet-600 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-violet-700 transition-colors font-medium">Add</button>
                          <button onClick={() => setAddingTo(null)} className="text-[10px] text-slate-500 hover:text-slate-300 px-2 py-1 rounded-md cursor-pointer">Cancel</button>
                        </div>
                      </motion.div>
                    )}
                    <AnimatePresence initial={false}>
                      {colTasks.map(task => {
                        const nextStatus: TaskStatus | null = col.key === 'todo' ? 'doing' : col.key === 'doing' ? 'done' : null;
                        const prevStatus: TaskStatus | null = col.key === 'done' ? 'doing' : col.key === 'doing' ? 'todo' : null;
                        const isFlashing = flashingTaskId === task.id;
                        const isDeleting = deletingIds.has(task.id);
                        return (
                          <motion.div
                            key={task.id}
                            layout
                            exit={{ opacity: 0, scale: 0.9, x: -8 }}
                            whileHover={{ scale: 1.01 }}
                            transition={{ layout: { duration: 0.3 } }}
                            className={`relative group rounded-xl p-2.5 border transition-colors duration-300 ${
                              celebratingTaskId === task.id
                                ? 'bg-emerald-500/20 border-emerald-400/40'
                                : isFlashing
                                  ? 'bg-violet-500/30 border-violet-400/50'
                                  : 'bg-white/10 hover:bg-white/15 border-white/5'
                            } ${isDeleting ? 'opacity-50 bg-red-500/10' : ''}`}
                          >
                            <button
                              onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                              className="absolute top-1.5 right-1.5 p-1 rounded opacity-0 group-hover:opacity-100 text-slate-600 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                            <div className="flex items-start gap-2">
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${PRIORITY_BADGE[task.priority]}`}>
                                {task.priority.slice(0, 3).toUpperCase()}
                              </span>
                              <p className="text-xs text-slate-200 leading-snug flex-1 pr-4">{task.title}</p>
                            </div>
                            {task.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2 ml-0">
                                {task.tags.map(tag => (
                                  <span key={tag} className="text-[9px] bg-violet-500/25 text-violet-300 px-1.5 py-0.5 rounded-full font-medium">{tag}</span>
                                ))}
                              </div>
                            )}
                            {task.dueDate && (() => {
                              const today = new Date().toISOString().slice(0, 10);
                              const due = task.dueDate;
                              const isPast = due < today;
                              const isToday = due === today;
                              return (
                                <div className={`flex items-center gap-1 mt-1.5 px-1.5 py-0.5 rounded text-[9px] font-medium w-fit ${
                                  isPast ? 'bg-red-500/15 text-red-400' : isToday ? 'bg-amber-500/15 text-amber-400' : 'bg-white/5 text-slate-500'
                                }`}>
                                  <Calendar className="w-2.5 h-2.5" />
                                  {isToday ? 'Due today' : isPast ? 'Overdue' : due.slice(5)}
                                </div>
                              );
                            })()}
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex gap-1">
                                {prevStatus && (
                                  <button onClick={() => move(task.id, prevStatus)} className="text-[9px] text-slate-500 hover:text-slate-200 bg-white/10 hover:bg-white/20 px-1.5 py-0.5 rounded cursor-pointer transition-all">← Back</button>
                                )}
                                {nextStatus && (
                                  <button onClick={() => move(task.id, nextStatus)} className="text-[9px] text-violet-400 hover:text-violet-200 bg-violet-500/10 hover:bg-violet-500/20 px-1.5 py-0.5 rounded cursor-pointer transition-all font-medium">Next →</button>
                                )}
                              </div>
                              <div className="w-4 h-4 bg-violet-700 rounded-full flex items-center justify-center text-[8px] text-white font-bold flex-shrink-0">{task.assignee}</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── UI LIBRARY APP (NexaUI) ────────────────────────────────────────────────

type UIComp = 'button' | 'badge' | 'alert' | 'input' | 'card' | 'switch';
type SwitchKey = 'notifications' | 'autosave' | 'darkmode';

const COMP_META: Record<UIComp, { label: string; description: string; version: string; isNew?: boolean }> = {
  button: { label: 'Button', description: 'Displays a button or component that looks like a button.', version: '1.4.0' },
  badge:  { label: 'Badge',  description: 'Displays a badge or component that looks like a badge.', version: '1.2.0' },
  alert:  { label: 'Alert',  description: 'Displays a callout for user attention.', version: '1.3.0' },
  input:  { label: 'Input',  description: 'Displays a form input field or component that looks like one.', version: '1.5.0', isNew: true },
  card:   { label: 'Card',   description: 'Displays a card with header, content, and footer sections.', version: '1.1.0' },
  switch: { label: 'Switch', description: 'A control that allows toggling between checked and unchecked.', version: '1.2.0' },
};

const SWITCH_ITEMS: { key: SwitchKey; label: string; desc: string }[] = [
  { key: 'notifications', label: 'Push Notifications', desc: 'Receive push notifications' },
  { key: 'autosave',      label: 'Auto-save',          desc: 'Automatically save changes' },
  { key: 'darkmode',      label: 'Dark Mode',           desc: 'Use dark theme across the app' },
];

function UILibraryApp() {
  type ActivePage = UIComp | 'intro' | 'install' | 'theming' | 'darkmode';

  const [activePage, setActivePage] = useState<ActivePage>('button');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [darkPreview, setDarkPreview] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [switches, setSwitches] = useState<Record<SwitchKey, boolean>>({ notifications: true, autosave: false, darkmode: true });
  const [inputVal, setInputVal] = useState('');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [paletteIndex, setPaletteIndex] = useState(0);

  const isNavPage = (p: ActivePage): boolean => ['intro', 'install', 'theming', 'darkmode'].includes(p as string);

  const currentComp: UIComp = isNavPage(activePage) ? 'button' : (activePage as UIComp);
  const meta = COMP_META[currentComp];
  const dp = darkPreview;

  const SIDEBAR_ITEMS: { key: UIComp; label: string; icon: ReactNode }[] = [
    { key: 'button', label: 'Button', icon: <Box className="w-3 h-3" /> },
    { key: 'badge',  label: 'Badge',  icon: <Circle className="w-3 h-3" /> },
    { key: 'alert',  label: 'Alert',  icon: <AlertCircle className="w-3 h-3" /> },
    { key: 'input',  label: 'Input',  icon: <Search className="w-3 h-3" /> },
    { key: 'card',   label: 'Card',   icon: <Layers className="w-3 h-3" /> },
    { key: 'switch', label: 'Switch', icon: <ToggleLeft className="w-3 h-3" /> },
  ];

  const CODE_STRINGS: Record<UIComp, string> = {
    button: `import { Button } from "@nexaui/react"\n\nexport function ButtonDemo() {\n  return (\n    <div className="flex gap-2 flex-wrap">\n      <Button>Default</Button>\n      <Button variant="secondary">Secondary</Button>\n      <Button variant="destructive">Delete</Button>\n      <Button variant="ghost">Ghost</Button>\n    </div>\n  )\n}`,
    badge: `import { Badge } from "@nexaui/react"\n\nexport function BadgeDemo() {\n  return (\n    <div className="flex gap-2 flex-wrap">\n      <Badge>Default</Badge>\n      <Badge variant="success">Success</Badge>\n      <Badge variant="warning">Warning</Badge>\n      <Badge variant="destructive">Error</Badge>\n    </div>\n  )\n}`,
    alert: `import { Alert, AlertTitle, AlertDescription } from "@nexaui/react"\n\nexport function AlertDemo() {\n  return (\n    <Alert>\n      <Info className="h-4 w-4" />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>\n        You can add components using the CLI.\n      </AlertDescription>\n    </Alert>\n  )\n}`,
    input: `import { Input, Label } from "@nexaui/react"\n\nexport function InputDemo() {\n  return (\n    <div className="space-y-2">\n      <Label htmlFor="email">Email</Label>\n      <Input\n        id="email"\n        type="email"\n        placeholder="Enter your email"\n      />\n    </div>\n  )\n}`,
    card: `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@nexaui/react"\n\nexport function CardDemo() {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>Create project</CardTitle>\n      </CardHeader>\n      <CardContent>\n        {/* form fields */}\n      </CardContent>\n      <CardFooter>\n        <Button>Deploy</Button>\n      </CardFooter>\n    </Card>\n  )\n}`,
    switch: `import { Switch, Label } from "@nexaui/react"\n\nexport function SwitchDemo() {\n  return (\n    <div className="flex items-center gap-2">\n      <Switch id="dark-mode" />\n      <Label htmlFor="dark-mode">\n        Dark mode\n      </Label>\n    </div>\n  )\n}`,
  };

  const copyCode = async () => {
    const activePage_UIComp = activePage as UIComp;
    if (!CODE_STRINGS[activePage_UIComp]) return;
    try {
      await navigator.clipboard.writeText(CODE_STRINGS[activePage_UIComp]);
      setCopyStatus('success');
    } catch {
      setCopyStatus('error');
    }
    setTimeout(() => setCopyStatus('idle'), 1500);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(p => !p);
        setPaletteQuery('');
        setPaletteIndex(0);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const preview: Record<UIComp, ReactNode> = {
    button: (
      <div className="space-y-5 w-full max-w-md">
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${dp ? 'text-slate-600' : 'text-gray-400'}`}>Variants</p>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'Default',     cls: 'bg-violet-600 text-white hover:bg-violet-700' },
              { label: 'Secondary',   cls: dp ? 'bg-white/10 text-slate-200 border border-white/20 hover:bg-white/20' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50' },
              { label: 'Destructive', cls: 'bg-red-600 text-white hover:bg-red-700' },
              { label: 'Ghost',       cls: dp ? 'text-slate-200 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100' },
              { label: 'Link',        cls: 'text-violet-500 hover:underline underline-offset-4' },
            ].map(b => (
              <button key={b.label} className={`px-3.5 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${b.cls}`}>{b.label}</button>
            ))}
          </div>
        </div>
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${dp ? 'text-slate-600' : 'text-gray-400'}`}>Sizes</p>
          <div className="flex flex-wrap items-end gap-2">
            <button className="px-2.5 py-1 bg-violet-600 text-white text-[10px] font-semibold rounded cursor-pointer">sm</button>
            <button className="px-3.5 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg cursor-pointer">md</button>
            <button className="px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl cursor-pointer">lg</button>
          </div>
        </div>
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${dp ? 'text-slate-600' : 'text-gray-400'}`}>States</p>
          <div className="flex items-center gap-2">
            <button disabled className={`px-3.5 py-2 text-xs font-semibold rounded-lg cursor-not-allowed ${dp ? 'bg-white/5 text-slate-700' : 'bg-gray-100 text-gray-400'}`}>Disabled</button>
            <button className="px-3.5 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-default">
              <svg className="w-3 h-3 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading
            </button>
          </div>
        </div>
      </div>
    ),
    badge: (
      <div className="space-y-5 w-full">
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${dp ? 'text-slate-600' : 'text-gray-400'}`}>Variants</p>
          <div className="flex flex-wrap gap-2 items-center">
            {[
              { label: 'Default',     cls: 'bg-violet-600 text-white' },
              { label: 'Secondary',   cls: dp ? 'bg-white/10 text-slate-200' : 'bg-gray-100 text-gray-700' },
              { label: 'Success',     cls: 'bg-emerald-100 text-emerald-700' },
              { label: 'Warning',     cls: 'bg-amber-100 text-amber-700' },
              { label: 'Destructive', cls: 'bg-red-100 text-red-700' },
              { label: 'Outline',     cls: dp ? 'border border-white/30 text-slate-300' : 'border border-gray-300 text-gray-600' },
            ].map(b => (
              <span key={b.label} className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${b.cls}`}>{b.label}</span>
            ))}
          </div>
        </div>
        <div>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${dp ? 'text-slate-600' : 'text-gray-400'}`}>With icons</p>
          <div className="flex flex-wrap gap-2 items-center">
            <span className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full ${dp ? 'bg-emerald-500/15 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
              <CheckCircle2 className="w-2.5 h-2.5" /> Active
            </span>
            <span className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full ${dp ? 'bg-amber-500/15 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
              <Clock className="w-2.5 h-2.5" /> Pending
            </span>
            <span className={`flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-full ${dp ? 'bg-red-500/15 text-red-400' : 'bg-red-100 text-red-700'}`}>
              <X className="w-2.5 h-2.5" /> Rejected
            </span>
          </div>
        </div>
      </div>
    ),
    alert: (
      <div className="space-y-3 w-full max-w-md">
        {[
          { icon: <Info className="w-4 h-4 flex-shrink-0" />, title: 'Heads up!', desc: 'You can add components using the CLI.', cls: dp ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800' },
          { icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" />, title: 'Success!', desc: 'Your changes have been saved successfully.', cls: dp ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800' },
          { icon: <AlertCircle className="w-4 h-4 flex-shrink-0" />, title: 'Warning', desc: 'This action may have unintended effects.', cls: dp ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800' },
          { icon: <X className="w-4 h-4 flex-shrink-0" />, title: 'Error', desc: 'Unable to process your request. Try again.', cls: dp ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-red-50 border-red-200 text-red-800' },
        ].map(a => (
          <div key={a.title} className={`flex items-start gap-3 px-4 py-3 rounded-xl border text-xs ${a.cls}`}>
            {a.icon}
            <div>
              <p className="font-bold">{a.title}</p>
              <p className="opacity-80 mt-0.5">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    input: (
      <div className="space-y-4 w-full max-w-xs">
        {[
          { label: 'Default',     placeholder: 'Enter text...',  error: false, disabled: false, icon: false },
          { label: 'With icon',   placeholder: 'Search...',      error: false, disabled: false, icon: true  },
          { label: 'Error state', placeholder: 'Enter email',    error: true,  disabled: false, icon: false },
          { label: 'Disabled',    placeholder: 'Not editable',   error: false, disabled: true,  icon: false },
        ].map(f => (
          <div key={f.label}>
            <label className={`text-[10px] font-semibold block mb-1 ${dp ? 'text-slate-400' : 'text-gray-500'}`}>{f.label}</label>
            <div className="relative">
              {f.icon && <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />}
              <input
                value={f.disabled ? '' : inputVal}
                onChange={e => { if (!f.disabled) setInputVal(e.target.value); }}
                placeholder={f.placeholder}
                disabled={f.disabled}
                className={`w-full px-3 py-2 text-xs rounded-lg border focus:outline-none focus:ring-2 transition-colors ${f.icon ? 'pl-8' : ''} ${
                  f.disabled
                    ? dp ? 'bg-white/5 border-white/10 text-slate-600 cursor-not-allowed' : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                    : f.error
                      ? dp ? 'bg-red-950/30 border-red-500/50 text-slate-200 focus:ring-red-500/30' : 'bg-white border-red-300 text-gray-900 focus:ring-red-200'
                      : dp ? 'bg-white/5 border-white/15 text-slate-200 focus:ring-violet-500/30 focus:border-violet-400 placeholder:text-slate-600' : 'bg-white border-gray-200 text-gray-900 focus:ring-violet-200 focus:border-violet-400 placeholder:text-gray-300'
                }`}
              />
            </div>
            {f.error && <p className="text-[10px] text-red-500 mt-0.5">Invalid email address</p>}
          </div>
        ))}
      </div>
    ),
    card: (
      <div className={`rounded-2xl border shadow-sm overflow-hidden w-full max-w-xs ${dp ? 'bg-[#1a1a1a] border-white/10' : 'bg-white border-gray-200'}`}>
        <div className={`px-5 pt-5 pb-4 border-b ${dp ? 'border-white/8' : 'border-gray-100'}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={`font-bold text-sm ${dp ? 'text-white' : 'text-gray-900'}`}>Create Project</p>
              <p className={`text-[11px] mt-0.5 ${dp ? 'text-slate-500' : 'text-gray-400'}`}>Deploy your project in one click.</p>
            </div>
            <div className="w-8 h-8 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Layers className="w-4 h-4 text-violet-600" />
            </div>
          </div>
        </div>
        <div className={`px-5 py-4 space-y-3 border-b ${dp ? 'border-white/8' : 'border-gray-100'}`}>
          <div>
            <label className={`text-[10px] font-semibold block mb-1 ${dp ? 'text-slate-400' : 'text-gray-500'}`}>Project name</label>
            <div className={`px-3 py-2 text-xs rounded-lg border ${dp ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>my-awesome-app</div>
          </div>
          <div>
            <label className={`text-[10px] font-semibold block mb-1 ${dp ? 'text-slate-400' : 'text-gray-500'}`}>Framework</label>
            <div className={`px-3 py-2 text-xs rounded-lg border flex items-center justify-between ${dp ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
              <span>Next.js</span>
              <span className={dp ? 'text-slate-600' : 'text-gray-400'}>▾</span>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 flex items-center justify-between">
          <button className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${dp ? 'text-slate-400 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}>Cancel</button>
          <button className="px-4 py-1.5 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-700 cursor-pointer transition-colors">Deploy →</button>
        </div>
      </div>
    ),
    switch: (
      <div className="space-y-4 w-full max-w-xs">
        {SWITCH_ITEMS.map(item => (
          <div key={item.key} className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className={`text-xs font-semibold ${dp ? 'text-slate-200' : 'text-gray-800'}`}>{item.label}</p>
              <p className={`text-[10px] mt-0.5 ${dp ? 'text-slate-600' : 'text-gray-400'}`}>{item.desc}</p>
            </div>
            <button
              onClick={() => setSwitches(p => ({ ...p, [item.key]: !p[item.key] }))}
              className={`relative w-10 h-6 rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0 ${switches[item.key] ? 'bg-violet-600' : dp ? 'bg-white/20' : 'bg-gray-200'}`}
            >
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm ${switches[item.key] ? 'left-5' : 'left-1'}`}
              />
            </button>
          </div>
        ))}
        <div className={`pt-3 border-t text-[10px] ${dp ? 'border-white/10 text-slate-600' : 'border-gray-100 text-gray-400'}`}>
          {Object.values(switches).filter(Boolean).length} of 3 options enabled
        </div>
      </div>
    ),
  };

  const codeContent: Record<UIComp, ReactNode> = {
    button: (
      <>
        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ Button }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
        <span className="text-violet-400">export function </span><span className="text-blue-300">ButtonDemo</span><span className="text-slate-500">{'() {'}</span>{'\n'}
        {'  '}<span className="text-violet-400">return</span><span className="text-slate-500"> (</span>{'\n'}
        {'    <'}<span className="text-red-400">div</span>{' '}<span className="text-sky-300">className</span><span className="text-slate-500">={'"flex gap-2 flex-wrap"'}</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Button</span><span className="text-slate-500">{'>'}</span>Default<span className="text-slate-500">{'</Button>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Button</span>{' '}<span className="text-sky-300">variant</span><span className="text-slate-500">=</span><span className="text-emerald-300">"secondary"</span><span className="text-slate-500">{'>'}</span>Secondary<span className="text-slate-500">{'</Button>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Button</span>{' '}<span className="text-sky-300">variant</span><span className="text-slate-500">=</span><span className="text-emerald-300">"destructive"</span><span className="text-slate-500">{'>'}</span>Delete<span className="text-slate-500">{'</Button>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Button</span>{' '}<span className="text-sky-300">variant</span><span className="text-slate-500">=</span><span className="text-emerald-300">"ghost"</span><span className="text-slate-500">{'>'}</span>Ghost<span className="text-slate-500">{'</Button>'}</span>{'\n'}
        {'    </'}<span className="text-red-400">div</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'  )'}{'\n'}
        {'}'}
      </>
    ),
    badge: (
      <>
        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ Badge }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
        <span className="text-violet-400">export function </span><span className="text-blue-300">BadgeDemo</span><span className="text-slate-500">{'() {'}</span>{'\n'}
        {'  '}<span className="text-violet-400">return</span><span className="text-slate-500"> (</span>{'\n'}
        {'    <'}<span className="text-red-400">div</span>{' '}<span className="text-sky-300">className</span><span className="text-slate-500">={'"flex gap-2 flex-wrap"'}</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Badge</span><span className="text-slate-500">{'>'}</span>Default<span className="text-slate-500">{'</Badge>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Badge</span>{' '}<span className="text-sky-300">variant</span><span className="text-slate-500">=</span><span className="text-emerald-300">"success"</span><span className="text-slate-500">{'>'}</span>Success<span className="text-slate-500">{'</Badge>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Badge</span>{' '}<span className="text-sky-300">variant</span><span className="text-slate-500">=</span><span className="text-emerald-300">"warning"</span><span className="text-slate-500">{'>'}</span>Warning<span className="text-slate-500">{'</Badge>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Badge</span>{' '}<span className="text-sky-300">variant</span><span className="text-slate-500">=</span><span className="text-emerald-300">"destructive"</span><span className="text-slate-500">{'>'}</span>Error<span className="text-slate-500">{'</Badge>'}</span>{'\n'}
        {'    </'}<span className="text-red-400">div</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'  )'}{'\n'}
        {'}'}
      </>
    ),
    alert: (
      <>
        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ Alert, AlertTitle,'}</span>{'\n'}
        {'       '}<span className="text-slate-300">{'AlertDescription }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
        <span className="text-violet-400">export function </span><span className="text-blue-300">AlertDemo</span><span className="text-slate-500">{'() {'}</span>{'\n'}
        {'  '}<span className="text-violet-400">return</span><span className="text-slate-500"> (</span>{'\n'}
        {'    <'}<span className="text-red-400">Alert</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Info</span>{' '}<span className="text-sky-300">className</span><span className="text-slate-500">={'"h-4 w-4"'}</span>{' /'}<span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">AlertTitle</span><span className="text-slate-500">{'>'}</span>Heads up!<span className="text-slate-500">{'</AlertTitle>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">AlertDescription</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'        '}You can add components using the CLI.{'\n'}
        {'      </'}<span className="text-red-400">AlertDescription</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'    </'}<span className="text-red-400">Alert</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'  )'}{'\n'}
        {'}'}
      </>
    ),
    input: (
      <>
        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ Input, Label }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
        <span className="text-violet-400">export function </span><span className="text-blue-300">InputDemo</span><span className="text-slate-500">{'() {'}</span>{'\n'}
        {'  '}<span className="text-violet-400">return</span><span className="text-slate-500"> (</span>{'\n'}
        {'    <'}<span className="text-red-400">div</span>{' '}<span className="text-sky-300">className</span><span className="text-slate-500">={'"space-y-2"'}</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Label</span>{' '}<span className="text-sky-300">htmlFor</span><span className="text-slate-500">=</span><span className="text-emerald-300">"email"</span><span className="text-slate-500">{'>'}</span>Email<span className="text-slate-500">{'</Label>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Input</span>{'\n'}
        {'        '}<span className="text-sky-300">id</span><span className="text-slate-500">=</span><span className="text-emerald-300">"email"</span>{'\n'}
        {'        '}<span className="text-sky-300">type</span><span className="text-slate-500">=</span><span className="text-emerald-300">"email"</span>{'\n'}
        {'        '}<span className="text-sky-300">placeholder</span><span className="text-slate-500">=</span><span className="text-emerald-300">"Enter your email"</span>{'\n'}
        {'      /'}<span className="text-slate-500">{'>'}</span>{'\n'}
        {'    </'}<span className="text-red-400">div</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'  )'}{'\n'}
        {'}'}
      </>
    ),
    card: (
      <>
        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ Card, CardHeader,'}</span>{'\n'}
        {'       '}<span className="text-slate-300">{'CardTitle, CardContent,'}</span>{'\n'}
        {'       '}<span className="text-slate-300">{'CardFooter }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
        <span className="text-violet-400">export function </span><span className="text-blue-300">CardDemo</span><span className="text-slate-500">{'() {'}</span>{'\n'}
        {'  '}<span className="text-violet-400">return</span><span className="text-slate-500"> (</span>{'\n'}
        {'    <'}<span className="text-red-400">Card</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">CardHeader</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'        <'}<span className="text-red-400">CardTitle</span><span className="text-slate-500">{'>'}</span>Create project<span className="text-slate-500">{'</CardTitle>'}</span>{'\n'}
        {'      </'}<span className="text-red-400">CardHeader</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">CardContent</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'        '}<span className="text-slate-600">{'/* form fields */'}</span>{'\n'}
        {'      </'}<span className="text-red-400">CardContent</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">CardFooter</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'        <'}<span className="text-red-400">Button</span><span className="text-slate-500">{'>'}</span>Deploy<span className="text-slate-500">{'</Button>'}</span>{'\n'}
        {'      </'}<span className="text-red-400">CardFooter</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'    </'}<span className="text-red-400">Card</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'  )'}{'\n'}
        {'}'}
      </>
    ),
    switch: (
      <>
        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ Switch, Label }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
        <span className="text-violet-400">export function </span><span className="text-blue-300">SwitchDemo</span><span className="text-slate-500">{'() {'}</span>{'\n'}
        {'  '}<span className="text-violet-400">return</span><span className="text-slate-500"> (</span>{'\n'}
        {'    <'}<span className="text-red-400">div</span>{' '}<span className="text-sky-300">className</span><span className="text-slate-500">={'"flex items-center gap-2"'}</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Switch</span>{' '}<span className="text-sky-300">id</span><span className="text-slate-500">=</span><span className="text-emerald-300">"dark-mode"</span>{' /'}<span className="text-slate-500">{'>'}</span>{'\n'}
        {'      <'}<span className="text-red-400">Label</span>{' '}<span className="text-sky-300">htmlFor</span><span className="text-slate-500">=</span><span className="text-emerald-300">"dark-mode"</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'        '}Dark mode{'\n'}
        {'      </'}<span className="text-red-400">Label</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'    </'}<span className="text-red-400">div</span><span className="text-slate-500">{'>'}</span>{'\n'}
        {'  )'}{'\n'}
        {'}'}
      </>
    ),
  };

  const paletteFiltered = SIDEBAR_ITEMS.filter(item =>
    paletteQuery === '' ||
    item.label.toLowerCase().includes(paletteQuery.toLowerCase()) ||
    COMP_META[item.key].description.toLowerCase().includes(paletteQuery.toLowerCase())
  );
  const paletteClamped = Math.min(paletteIndex, Math.max(0, paletteFiltered.length - 1));

  return (
    <div className="relative flex h-full overflow-hidden" style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* ── Sidebar ── */}
      <div className="w-44 flex-shrink-0 bg-[#0f0f0f] flex flex-col overflow-hidden border-r border-white/[0.06]">
        {/* Logo */}
        <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-2 flex-shrink-0">
          <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-md flex items-center justify-center flex-shrink-0">
            <Palette className="w-3 h-3 text-white" />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">NexaUI</span>
          <span className="text-[9px] bg-violet-500/20 text-violet-400 px-1.5 py-0.5 rounded-full font-bold ml-auto">v2</span>
        </div>
        {/* Search */}
        <div className="px-3 py-2 border-b border-white/[0.06] flex-shrink-0">
          <button
            onClick={() => { setPaletteOpen(true); setPaletteQuery(''); setPaletteIndex(0); }}
            className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5 border border-white/[0.06] w-full text-left cursor-pointer hover:bg-white/10 transition-colors"
          >
            <Search className="w-3 h-3 text-slate-600 flex-shrink-0" />
            <span className="text-[11px] text-slate-700 flex-1">Search...</span>
            <span className="ml-auto text-[9px] bg-white/8 text-slate-600 px-1 rounded font-mono">⌘K</span>
          </button>
        </div>
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
          <div>
            <p className="text-[9px] font-bold text-slate-700 uppercase tracking-widest px-2 mb-1.5">Getting Started</p>
            {[
              { label: 'Introduction', key: 'intro' as ActivePage },
              { label: 'Installation', key: 'install' as ActivePage },
              { label: 'Theming', key: 'theming' as ActivePage },
              { label: 'Dark Mode', key: 'darkmode' as ActivePage },
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setActivePage(item.key)}
                className={`w-full text-left px-2.5 py-1.5 text-[11px] rounded-md cursor-pointer transition-colors ${
                  activePage === item.key
                    ? 'bg-violet-500/20 text-violet-300 font-semibold'
                    : 'text-slate-600 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div>
            <p className="text-[9px] font-bold text-slate-700 uppercase tracking-widest px-2 mb-1.5">Components</p>
            {SIDEBAR_ITEMS.map(item => (
              <button
                key={item.key}
                onClick={() => { setActivePage(item.key); setActiveTab('preview'); }}
                className={`w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] transition-all cursor-pointer ${
                  activePage === item.key
                    ? 'bg-violet-500/20 text-violet-300 font-semibold'
                    : 'text-slate-600 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="flex-1">{item.label}</span>
                {item.key === 'input' && <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded font-bold">NEW</span>}
              </button>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-white/[0.06] flex-shrink-0">
          <p className="text-[10px] text-slate-700">24 components · MIT license</p>
        </div>
      </div>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {isNavPage(activePage) ? (
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="max-w-lg"
              >
                {activePage === 'intro' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">Introduction</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      NexaUI is a beautifully designed, accessible component library built on top of Radix UI primitives and styled with Tailwind CSS. Copy and paste components directly into your apps.
                    </p>
                    {[
                      { icon: '⚡', title: 'Fast by default', desc: 'Tree-shakeable, zero runtime overhead.' },
                      { icon: '♿', title: 'Accessible', desc: 'Built on Radix UI for full a11y compliance.' },
                      { icon: '🎨', title: 'Customizable', desc: 'CSS variables and Tailwind utilities.' },
                    ].map(f => (
                      <div key={f.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="text-xl">{f.icon}</span>
                        <div>
                          <p className="text-xs font-bold text-gray-800">{f.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activePage === 'install' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">Installation</h2>
                    <p className="text-sm text-gray-600">Get started in 2 steps:</p>
                    <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/5">
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-[#252535] border-b border-white/[0.06]">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                        <span className="text-[10px] text-slate-500 font-mono ml-2">terminal</span>
                      </div>
                      <pre className="p-4 text-xs font-mono text-emerald-400">
                        {'npm install @nexaui/react\n\n'}
                        <span className="text-slate-500">{'# or with pnpm\n'}</span>
                        {'pnpm add @nexaui/react'}
                      </pre>
                    </div>
                    <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/5">
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-[#252535] border-b border-white/[0.06]">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                        <span className="text-[10px] text-slate-500 font-mono ml-2">app.tsx</span>
                      </div>
                      <pre className="p-4 text-xs font-mono">
                        <span className="text-violet-400">import</span>
                        {' '}
                        <span className="text-slate-300">{'{ Button }'}</span>
                        {' '}
                        <span className="text-violet-400">from</span>
                        {' '}
                        <span className="text-emerald-300">"@nexaui/react"</span>
                        {'\n'}
                        <span className="text-violet-400">import</span>
                        {' '}
                        <span className="text-emerald-300">"@nexaui/react/styles.css"</span>
                      </pre>
                    </div>
                  </div>
                )}
                {activePage === 'theming' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">Theming</h2>
                    <p className="text-sm text-gray-600">Customize NexaUI with CSS variables in your global stylesheet:</p>
                    <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/5">
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-[#252535] border-b border-white/[0.06]">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                        <span className="text-[10px] text-slate-500 font-mono ml-2">globals.css</span>
                      </div>
                      <pre className="p-4 text-[11px] font-mono leading-6">
                        <span className="text-slate-400">{':root {'}</span>{'\n'}
                        {'  '}<span className="text-sky-300">--primary</span>{': '}<span className="text-emerald-300">262 83% 58%</span>{'; '}<span className="text-slate-600">{'/* violet */'}</span>{'\n'}
                        {'  '}<span className="text-sky-300">--radius</span>{': '}<span className="text-emerald-300">0.5rem</span>{';'}{'\n'}
                        {'  '}<span className="text-sky-300">--background</span>{': '}<span className="text-emerald-300">0 0% 100%</span>{';'}{'\n'}
                        {'  '}<span className="text-sky-300">--foreground</span>{': '}<span className="text-emerald-300">222 84% 5%</span>{';'}{'\n'}
                        <span className="text-slate-400">{'}'}</span>
                      </pre>
                    </div>
                  </div>
                )}
                {activePage === 'darkmode' && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">Dark Mode</h2>
                    <p className="text-sm text-gray-600">Wrap your app with ThemeProvider to enable dark mode support:</p>
                    <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/5">
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-[#252535] border-b border-white/[0.06]">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                        <span className="text-[10px] text-slate-500 font-mono ml-2">layout.tsx</span>
                      </div>
                      <pre className="p-4 text-xs font-mono">
                        <span className="text-violet-400">import</span>{' '}<span className="text-slate-300">{'{ ThemeProvider }'}</span>{' '}<span className="text-violet-400">from</span>{' '}<span className="text-emerald-300">"@nexaui/react"</span>{'\n\n'}
                        <span className="text-violet-400">export default function </span><span className="text-blue-300">Layout</span><span className="text-slate-500">{'({ children }) {'}</span>{'\n'}
                        {'  '}<span className="text-violet-400">return</span>{' (\n'}
                        {'    <'}<span className="text-red-400">ThemeProvider</span>{'\n'}
                        {'      '}<span className="text-sky-300">defaultTheme</span><span className="text-slate-500">=</span><span className="text-emerald-300">"system"</span>{'\n'}
                        {'    >\n'}
                        {'      {'}<span className="text-slate-300">children</span>{'}\n'}
                        {'    </'}<span className="text-red-400">ThemeProvider</span>{'>\n'}
                        {'  )\n}'}
                      </pre>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-violet-50 rounded-xl border border-violet-100">
                      <div className="w-8 h-8 bg-[#0f0f0f] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Moon className="w-4 h-4 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">System preference detected</p>
                        <p className="text-xs text-gray-500">Respects prefers-color-scheme media query</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <>
            {/* Top bar */}
            <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-gray-900">{meta.label}</h2>
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-mono flex-shrink-0">{meta.version}</span>
                  {meta.isNew && <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full font-bold flex-shrink-0">NEW</span>}
                </div>
                <p className="text-xs text-gray-400 mt-0.5 truncate">{meta.description}</p>
              </div>
              <button
                onClick={() => setDarkPreview(p => !p)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors flex-shrink-0 ml-4"
              >
                {dp ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                {dp ? 'Light' : 'Dark'}
              </button>
            </div>

            {/* Tabs */}
            <div className="flex items-end px-6 border-b border-gray-100 flex-shrink-0">
              {(['preview', 'code'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium capitalize transition-all cursor-pointer border-b-2 -mb-px ${
                    activeTab === tab
                      ? 'border-violet-500 text-violet-600'
                      : 'border-transparent text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {tab === 'code' && <Code2 className="w-3 h-3" />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'preview' ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`p-6 min-h-full transition-colors duration-300 ${dp ? 'bg-[#0f0f0f]' : 'bg-[#f9fafb]'}`}
                  >
                    <div className={`rounded-2xl border p-6 flex items-center justify-center min-h-48 transition-colors duration-300 ${dp ? 'bg-[#1a1a1a] border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
                      {preview[activePage as UIComp]}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="p-6"
                  >
                    <div className="rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/5">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#252535] border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                          <span className="text-[10px] text-slate-500 font-mono ml-2">demo.tsx</span>
                        </div>
                        <button
                          onClick={copyCode}
                          className="flex items-center gap-1.5 text-[10px] font-medium cursor-pointer transition-colors px-2 py-1 rounded hover:bg-white/10"
                        >
                          {copyStatus === 'success' ? (
                            <><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
                          ) : copyStatus === 'error' ? (
                            <><AlertCircle className="w-3 h-3 text-amber-400" /><span className="text-amber-400">Failed</span></>
                          ) : (
                            <><Copy className="w-3 h-3 text-slate-500" /><span className="text-slate-400">Copy</span></>
                          )}
                        </button>
                      </div>
                      <pre className="p-5 text-[10px] leading-5 overflow-x-auto font-mono whitespace-pre-wrap">
                        {codeContent[activePage as UIComp]}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {paletteOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-40"
              onClick={() => setPaletteOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 w-80 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <Search className="w-4 h-4 text-slate-500" />
                <input
                  autoFocus
                  value={paletteQuery}
                  onChange={e => { setPaletteQuery(e.target.value); setPaletteIndex(0); }}
                  onKeyDown={e => {
                    if (e.key === 'Escape') setPaletteOpen(false);
                    if (e.key === 'ArrowDown') {
                      e.preventDefault();
                      setPaletteIndex(i => Math.min(i + 1, Math.max(0, paletteFiltered.length - 1)));
                    }
                    if (e.key === 'ArrowUp') {
                      e.preventDefault();
                      setPaletteIndex(i => Math.max(i - 1, 0));
                    }
                    if (e.key === 'Enter' && paletteFiltered.length > 0) {
                      setActivePage(paletteFiltered[paletteClamped].key);
                      setActiveTab('preview');
                      setPaletteOpen(false);
                    }
                  }}
                  placeholder="Search components..."
                  className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder:text-slate-600"
                />
                <button onClick={() => setPaletteOpen(false)} className="text-slate-600 hover:text-slate-400 cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="py-2 max-h-64 overflow-y-auto">
                {paletteFiltered.length === 0 ? (
                  <p className="px-4 py-3 text-xs text-slate-600">No results found</p>
                ) : (
                  paletteFiltered.map((item, i) => (
                    <button
                      key={item.key}
                      onClick={() => {
                        setActivePage(item.key);
                        setActiveTab('preview');
                        setPaletteOpen(false);
                      }}
                      className={`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors cursor-pointer ${
                        i === paletteClamped ? 'bg-violet-500/20' : 'hover:bg-white/5'
                      }`}
                    >
                      <span className={`${i === paletteClamped ? 'text-violet-400' : 'text-slate-500'}`}>{item.icon}</span>
                      <div>
                        <p className={`text-xs font-semibold ${i === paletteClamped ? 'text-violet-300' : 'text-slate-300'}`}>{item.label}</p>
                        <p className="text-[10px] text-slate-600">{COMP_META[item.key].description.slice(0, 45)}...</p>
                      </div>
                      {COMP_META[item.key].isNew && <span className="ml-auto text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded font-bold">NEW</span>}
                    </button>
                  ))
                )}
              </div>
              <div className="px-4 py-2 border-t border-white/[0.06] flex items-center gap-3 text-[9px] text-slate-700">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── PROJECT DATA ─────────────────────────────────────────────────────────────

interface Project {
  title: string;
  description: string;
  tech: string[];
  cardIcon: ReactNode;
  accentColor: string;
  tagColor: string;
  previewBg: string;
  previewContent: ReactNode;
  demoApp: ReactNode;
}

const projects: Project[] = [
  {
    title: 'Metal Fabrication Slovakia',
    description: 'B2B e-commerce platform for steel and metal products',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    cardIcon: <ShoppingBag className="w-10 h-10 text-orange-500" />,
    accentColor: 'from-orange-500 to-amber-600',
    tagColor: 'bg-orange-100 text-orange-700',
    previewBg: 'bg-[#0f172a]',
    previewContent: (
      <div className="p-3 space-y-2">
        <div className="h-2 bg-orange-500/80 rounded w-24" />
        <div className="grid grid-cols-2 gap-1.5">
          {['bg-slate-700', 'bg-slate-700', 'bg-slate-700', 'bg-slate-700'].map((c, i) => (
            <div key={i} className={`${c} rounded-lg p-2 space-y-1`}>
              <div className="h-6 bg-slate-600 rounded" />
              <div className="h-1.5 bg-orange-500/60 rounded w-12" />
            </div>
          ))}
        </div>
      </div>
    ),
    demoApp: <EcommerceApp />,
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative kanban board with live updates',
    tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'WebSocket'],
    cardIcon: <ClipboardList className="w-10 h-10 text-violet-500" />,
    accentColor: 'from-violet-600 to-purple-700',
    tagColor: 'bg-violet-100 text-violet-700',
    previewBg: 'bg-[#0f0e17]',
    previewContent: (
      <div className="p-3 flex gap-1.5">
        {['bg-slate-700/60', 'bg-violet-900/60', 'bg-emerald-900/60'].map((c, i) => (
          <div key={i} className={`flex-1 ${c} rounded-lg p-2 space-y-1.5`}>
            <div className="h-1.5 bg-white/20 rounded w-full" />
            <div className="h-4 bg-white/10 rounded" />
            <div className="h-4 bg-white/10 rounded" />
            {i === 0 && <div className="h-4 bg-white/10 rounded" />}
          </div>
        ))}
      </div>
    ),
    demoApp: <TaskManagerApp />,
  },
  {
    title: 'UI Component Library',
    description: 'Open-source React component library with dark mode & Radix UI primitives',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    cardIcon: <Palette className="w-10 h-10 text-fuchsia-500" />,
    accentColor: 'from-fuchsia-500 to-violet-600',
    tagColor: 'bg-fuchsia-100 text-fuchsia-700',
    previewBg: 'bg-[#0f0f0f]',
    previewContent: (
      <div className="p-2 w-full flex gap-1.5">
        <div className="w-1/3 bg-[#1a1a1a] border border-white/[0.06] rounded-lg p-2 space-y-1.5">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-3 h-3 bg-gradient-to-br from-violet-500 to-indigo-600 rounded flex-shrink-0" />
            <div className="h-1.5 bg-white/20 rounded w-10" />
          </div>
          {['bg-white/10', 'bg-white/10', 'bg-violet-500/25', 'bg-white/10', 'bg-white/10'].map((c, i) => (
            <div key={i} className={`h-2.5 ${c} rounded-md w-full`} />
          ))}
        </div>
        <div className="flex-1 bg-[#1a1a1a] border border-white/[0.06] rounded-lg p-2 space-y-2">
          <div className="flex gap-1 items-center">
            <div className="h-4 bg-fuchsia-600/80 rounded px-2 w-12" />
            <div className="h-4 bg-white/10 border border-white/15 rounded w-10" />
            <div className="h-4 bg-red-500/60 rounded w-10" />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {['bg-violet-500/30', 'bg-emerald-500/30', 'bg-amber-500/30', 'bg-red-500/30'].map((c, i) => (
              <div key={i} className={`h-3 ${c} rounded-full w-10`} />
            ))}
          </div>
          <div className="h-3 bg-white/5 border border-white/10 rounded-lg w-full" />
        </div>
      </div>
    ),
    demoApp: <UILibraryApp />,
  },
];

// ─── PROJECT MODAL ────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col overflow-hidden"
        style={{ height: 'min(88vh, 720px)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`bg-gradient-to-r ${project.accentColor} px-5 py-4 flex items-center justify-between flex-shrink-0`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              {project.cardIcon}
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">{project.title}</h3>
              <p className="text-white/70 text-xs mt-0.5">{project.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4 flex-shrink-0">
            <span className="text-white/50 text-[10px] hidden sm:inline">Press Esc to close</span>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 cursor-pointer transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border-b border-gray-100 flex-shrink-0 overflow-x-auto">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap">Stack:</span>
          {project.tech.map(t => (
            <span key={t} className={`px-2.5 py-1 text-[10px] font-semibold rounded-full whitespace-nowrap ${project.tagColor}`}>{t}</span>
          ))}
        </div>

        {/* App Demo */}
        <div className="flex-1 overflow-hidden">
          {project.demoApp}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── PROJECTS SECTION ─────────────────────────────────────────────────────────

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-500 mt-3 text-sm">Click any project to launch an interactive demo</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer group border border-gray-100"
                >
                  {/* App preview thumbnail */}
                  <div className={`h-32 ${project.previewBg} overflow-hidden relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {project.previewContent}
                    </div>
                    {/* Play overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-4 h-4 text-gray-900 ml-0.5" />
                      </div>
                    </div>
                    {/* Gradient top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accentColor}`} />
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {project.cardIcon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-base leading-tight">{project.title}</h3>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(tech => (
                        <span key={tech} className={`px-2.5 py-1 text-[10px] font-semibold rounded-full ${project.tagColor}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r ${project.accentColor} text-white text-sm font-bold group-hover:shadow-lg transition-shadow duration-300`}>
                      <Play className="w-4 h-4" />
                      Launch Demo
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
