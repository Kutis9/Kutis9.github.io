# TypeScript Best Practices

Best practices pre TypeScript v projekte Kutis9.github.io.

## 🔒 Strict Mode Configuration

Projekt je nakonfigurovaný so **strict mode**:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictPropertyInitialization": true
  }
}
```

## ✅ Type Annotations

### Always Annotate

```typescript
// ✅ GOOD - Vždy typ
const name: string = 'John';
const count: number = 5;
const isActive: boolean = true;
const items: string[] = ['a', 'b'];
```

### Let TypeScript Infer When Clear

```typescript
// ✅ OK - TypeScript vie typ
const name = 'John';      // inferred: string
const count = 5;          // inferred: number
const isActive = true;    // inferred: boolean
```

### Always Annotate Function Parameters

```typescript
// ✅ GOOD
function greet(name: string): string {
  return `Hello, ${name}`;
}

const handler = (event: React.MouseEvent<HTMLButtonElement>): void => {
  console.log(event);
};

// ❌ BAD
function greet(name) {
  return `Hello, ${name}`;
}

const handler = (event) => {
  console.log(event);
};
```

## 🏗️ Interface Definitions

### Component Props

```typescript
// ✅ GOOD
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) {
  // Implementation
}

// ❌ BAD - Using type instead of interface for objects
type ButtonProps = {
  label: string;
  onClick: () => void;
};
```

### Object Structures

```typescript
// ✅ GOOD - Use interface for object contracts
interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  image?: string;
}

// ✅ ALSO GOOD - Use type for unions/complex
type ProjectOrNull = Project | null;
type ProjectStatus = 'draft' | 'published' | 'archived';
```

## 🔄 Union & Literal Types

### Use Union Types for Variants

```typescript
// ✅ GOOD
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant: ButtonVariant;
  size: Size;
}

// ❌ BAD
interface ButtonProps {
  variant: string;  // Too broad
  size: string;     // Could be anything
}
```

### Optional vs Union with Undefined

```typescript
// ✅ GOOD - Use optional for props
interface Props {
  title: string;
  description?: string;  // Optional
}

// ✅ ALSO GOOD - Use union for state
type State = { status: 'loading' } | { status: 'success'; data: string };

// ❌ BAD
interface Props {
  title: string;
  description: string | undefined;  // Use ? for optional
}
```

## 🎯 Avoid `any`

### Never Use `any`

```typescript
// ❌ NEVER
const value: any = getSomeValue();

// ✅ INSTEAD - Use proper types
const value: unknown = getSomeValue();
if (typeof value === 'string') {
  // Now TypeScript knows it's a string
}

// ✅ OR - Type the source function
function getValue(): string {
  return 'value';
}
```

### Type React Events Correctly

```typescript
// ✅ GOOD
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const value = e.currentTarget.value;
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault();
};

// ❌ BAD
const handleChange = (e: any): void => {
  const value = e.target.value;
};
```

## 📦 Generic Types

### Use Generics for Reusability

```typescript
// ✅ GOOD - Generic array wrapper
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>;
}

// Usage
<List<Project> items={projects} renderItem={(p) => <div>{p.title}</div>} />

// ✅ GOOD - Generic fetch function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json() as T;
}

// Usage
const project = await fetchData<Project>('/api/project/1');
```

## 🔍 Type Guards

### Narrow Types with Type Guards

```typescript
// ✅ GOOD
type Result = { status: 'success'; data: string } | { status: 'error'; error: string };

function handleResult(result: Result): void {
  if (result.status === 'success') {
    console.log(result.data);  // TypeScript knows it's success
  } else {
    console.error(result.error);  // TypeScript knows it's error
  }
}

// ✅ GOOD - Custom type guard
function isProject(value: unknown): value is Project {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'title' in value &&
    'description' in value
  );
}

if (isProject(data)) {
  console.log(data.title);  // TypeScript knows it's Project
}

// ✅ GOOD - instanceof check
if (value instanceof Error) {
  console.error(value.message);
}
```

## 🔐 Const Assertions

### Use `as const` for Literal Types

```typescript
// ✅ GOOD
const sizes = ['sm', 'md', 'lg'] as const;
type Size = (typeof sizes)[number];  // 'sm' | 'md' | 'lg'

// ✅ GOOD
const config = {
  maxRetries: 3,
  timeout: 5000,
} as const;

// Type-safe object keys
type ConfigKey = keyof typeof config;  // 'maxRetries' | 'timeout'
```

## 🚫 Null/Undefined Handling

### Handle Nullability

```typescript
// ✅ GOOD - Check for null
function processValue(value: string | null): void {
  if (value === null) {
    console.log('Value is null');
    return;
  }
  console.log(value.toUpperCase());
}

// ✅ GOOD - Optional chaining
const name = user?.profile?.name;

// ✅ GOOD - Nullish coalescing
const port = process.env.PORT ?? 3000;

// ❌ BAD - Ignoring nullability
function processValue(value: string | null): void {
  console.log(value.toUpperCase());  // Error if null
}
```

## 🎨 React TypeScript Patterns

### Component with Generic

```typescript
// ✅ GOOD
interface SelectProps<T> {
  options: T[];
  onChange: (value: T) => void;
  renderOption: (option: T) => string;
}

export function Select<T>({
  options,
  onChange,
  renderOption,
}: SelectProps<T>) {
  return (
    <select onChange={(e) => onChange(options[parseInt(e.target.value)])}>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {renderOption(option)}
        </option>
      ))}
    </select>
  );
}
```

### Children Typing

```typescript
// ✅ GOOD
interface ContainerProps {
  title: string;
  children: React.ReactNode;  // Any valid React content
}

// ✅ ALSO GOOD - If you need multiple children with types
interface LayoutProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

// ✅ ALSO GOOD - If you need specific component types
interface TabsProps {
  children: React.ReactElement<TabProps>[];
}
```

### Event Handler Types

```typescript
// ✅ GOOD
interface FormProps {
  onSubmit: (data: FormData) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// ✅ GOOD - Async handlers
interface AsyncProps {
  onFetch: () => Promise<void>;
  onSave: (data: Data) => Promise<void>;
}
```

## 📋 Common Type Patterns

### Result Type

```typescript
// ✅ GOOD - Handle success/error
type Result<T, E = Error> =
  | { status: 'success'; value: T }
  | { status: 'error'; error: E };

async function getUser(id: string): Promise<Result<User>> {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    return { status: 'success', value: user };
  } catch (error) {
    return { status: 'error', error: error as Error };
  }
}
```

### Omit & Pick

```typescript
// ✅ GOOD - Reuse types
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Without sensitive fields
type UserProfile = Omit<User, 'password'>;

// Only specific fields
type UserEmail = Pick<User, 'email' | 'name'>;
```

### Partial & Required

```typescript
// ✅ GOOD
interface Config {
  host: string;
  port: number;
  ssl: boolean;
}

// All optional
type PartialConfig = Partial<Config>;

// All required (even if originally optional)
interface Props {
  title?: string;
  description?: string;
}
type RequiredProps = Required<Props>;
```

## ✔️ Checklist

Pri vytváraní TypeScript kódu:

- [ ] Všetky funkčné parametre sú typované
- [ ] Všetky return typy sú špecifikované
- [ ] Žiadny `any` typ bez odsúhlasenia
- [ ] Props interfacie sú jasne definované
- [ ] Optional props používajú `?` nie `| undefined`
- [ ] Union typy pre variácie (nie string)
- [ ] Žiadne unused variables (strict mode)
- [ ] Null/undefined sú handlované
- [ ] React event typy sú správne
- [ ] `npm run build` prechádza bez erroru

---

**Last Updated**: January 2026
**Project**: Kutis9.github.io Portfolio
