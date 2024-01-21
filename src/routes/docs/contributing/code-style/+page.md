---
title: Coding styles and conventions
---

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

## Code Style in XAML

To make the codebase consistent and easy to understand, we require you to use [XAML Styler](https://marketplace.visualstudio.com/items?itemName=TeamXavalon.XAMLStyler2022) for styling XAML.

## Code Style in C# and C++

To make the codebase consistent and easy to understand, we require you to follow our predefined code style rules:

### 1. Naming notation for objects and functions

1. Use PascalCase for classes
2. Use PascalCase prefixed with `I` for interfaces
3. Use PascalCase for structs
4. Use PascalCase for functions/methods
5. Use "Base" prefix for abstract classes
6. Use "Service" suffix for service classes and interfaces
7. Use "Model" suffix for model classes
8. Use "ViewModel" suffix for view model classes
9. Use "Dialog" suffix for dialog controls
10. Use "Page" suffix for pages
11. Use "Async" suffix for async methods except for event methods

### 2. Naming notation for variables

1. Use PascalCase for properties
2. Use PascalCase prefixed with `_` for properties' backing fields
3. Use camelCase for fields, method parameters
4. Use camelCase prefixed with `_` for fields
5. Use Hungarian Notation only for OS functions/API calls
6. Use UPPER_CASE for constant variables
7. Use predefined primitive types like `int`, `long`, `string` instead of `Int32`, `Int64`, `String`

### 3. Code readability and clarity

1. Do not use curly brackets for single line `if`, `for` and `foreach` statements
2. Do not omit curly braces in method returns
3. Insert a blank line after closing curly bracket.
4. Do not use `#region` directives
5. Align `while();` on the same line of curly bracket of `do..while`
6. Use the prefixes `Is`, `Has`, `Have`, `Any`, `Can` or similar keywords for boolean names and method names if applicable
7. Do not use `Enum` or `Flag(s)` suffixes/prefixes for Enum names
8. Align curly brackets on new lines
9. Fields, properties, methods and constructors must be separated by one line except for property backing fields that are not separated by any amount of lines
10. Do not manually invoke event handling functions or commands
11. Do not use `public` modifiers in interface's properties and functions
12. Define constant types in `Constants` class following its structure
13. Mark classes as `sealed` if applicable
14. Interfaces must be documented
15. Always create new `EventArgs` classes for event arguments
16. Add letter suffix to number values: `0.1d`, `100000000000L`, `1.1f`
17. Use `ICommand` instead of `RelayCommand<T>`.
18. Any class that implements `IDisposable` must also contain a field `private bool _disposed;`
19. Follow single-responsibility principle in classes, modules, and methods

### 4. Class structure

The following presents how a class structure should be ordered:

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

### 6. Helpers and extensions

1. Helper classes must be static.
2. Extension classes must be static and only contain extension functions related to one type or derivatives

### 7. Package references
