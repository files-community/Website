# Code quality standards

All code contributed to the repository must follow
our [Model-View-ViewModel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) design path. The code
must be well-written and expose a clear purpose. Workarounds are not welcome unless the scope of the PR touches external
components
(OS functions/API calls) that require unconventional practices of coding. Your code must be easily maintainable without
requiring to rewrite core parts, making sure no code is being duplicated, utilizing abstractions and inheritance is a
great way to sustain high code metrics. Your code must also be tested for potential regressions and unwanted memory
leaks.

We also prioritize accessibility, to check whether your pull request meets our accessibility standards, you're
encouraged to use [Accessibility Insights for Windows](https://accessibilityinsights.io/docs/en/windows/overview/)
to ensure everyone can take full advantage of Files.

## Code Style

To make the codebase consistent and easy to understand, we require you to follow our predefined code style rules:

### 1. Naming notation for objects and functions

- Use PascalCase for classes
- Use PascalCase prefixed with `I` for interfaces
- Use PascalCase for structs
- Use PascalCase for functions/methods
- Use "Base" prefix for base classes
- Use "Service" suffix for service classes and interfaces
- Use "Model" suffix for model classes
- Use "ViewModel" suffix for view model classes
- Use "Dialog" suffix for dialog controls
- Use "Control" suffix for user controls
- Use "Page" suffix for pages

### 2. Naming notation for variables

- Use PascalCase for properties and static fields/properties
- Use PascalCase prefixed with `_` for properties' backing fields
- Use camelCase for protected, public fields, protected fields backing properties, and method parameters
- Use camelCase prefixed with `_` for private fields
- Use Hungarian Notation only for OS functions/API calls
- Use UPPER_CASE for constant variables
- Use predefined primitive types like `int`, `long`, `string` instead of `Int32`, `Int64`, `String`

### 3. Code readability and clarity

- Use curly brackets for single line `if`, `for` and `foreach` statements.'
- Do not use `#region` directives
- Align `while();` on the same line of curly bracket of `do..while`
- Use the prefixes `Is`, `Has`, `Have`, `Any`, `Can` or similar keywords for boolean names and method names if
  applicable.
- Do not use `Enum` or `Flag(s)` suffixes/prefixes for Enum names.
- Align curly brackets on new lines
- Fields, properties, methods and constructors must be separated by one line except for property backing fields that are
  not separated by any amount of lines
- Do not manually invoke event handling functions or commands
- Do not use `public` modifiers in interface's properties and functions
- Define constant types in `Constants` class following its structure
- Mark classes as `abstract` or `sealed` if applicable.
- Interfaces must be documented
- Always create new `EventArgs` classes for event arguments
- Add letter suffix to number values: `0.1d`, `100000000000L`, `1.1f`
- Do not use `RelayCommand<Type>`, rather rely on `ICommand`
- Any class that implements `IDisposable` must also contain a field `private bool _disposed;`
- You are obliged to use [XAML Styler](https://marketplace.visualstudio.com/items?itemName=TeamXavalon.XAMLStyler2022)
  for styling XAML
- Follow single-responsibility principle in classes, modules, and methods

### 4. Class structure

The following presents how a class structure should be ordered:

- Static fields
- Static fields
- Static properties

- `readonly` fields
- Fields
- `_disposed` field (if applicable)

- Service property

- Properties
- UI properties
- ICommand properties

- Constructor `{ fields injection, initialization of fields, command implementation }`

- Command implementation functions (private/protected only, can be virtual but not abstract)

- public (virtual/override) methods (with parameters amount descending)
- protected (virtual/override) methods (with parameters amount descending)
- private methods

- `static` methods

- `abstract` methods

- Operators

- Assertions e.g. `AssertNotDisposed()`, `AssertInitialized()`, `AssertStreamOpened()`
- IDisposable.Dispose() function

### 5. Interface structure

The following presents how an interface structure should be ordered:

- properties
- functions (name descending + parameters amount descending)

### 6. Helper classes and extensions

- Helper classes must be either static or fully instanced
- Extension classes must be static and only contain extension functions related to one type or derivatives