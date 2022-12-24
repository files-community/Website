---
title: Сборка приложения Files
---

### 1: Подготовка

- [Git](https://git-scm.com)
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) с установленным UWP Development Kit, включая C++ UWP build tools.
- C++ ATL для UWP build tools

### 2: Клонируйте репозиторий

```ps
git clone https://github.com/files-community/Files
```

Это создаст копию репозитория на вашем компьютере.

### 3: Сборка проекта

Для сборки приложения в режиме разработки, откройте .sln файл в Visual Studio (Files.sln) и установите проект Files.Package как элемент запуска с помощью клика на правую кнопку мыши по `Files.Package` в `Обозревателе Решений` (англ. `Solution Explorer`) и нажмите `"Установить как элемент запуска"` (англ. `Set as Startup item`).

В панели выбора архитектуры приложения, выберите правильную архитектуру для вашей системы в качестве `Debug`. Это будет выглядеть следующим образом:

![VS Run config: Debug, x64, Files.Package, Local Machine](/docs-resources/vs-architecture-config.png)

Можете действовать!
