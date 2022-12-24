---
title: Устранение неполадок при установке
---

Процесс установки Files зависит от appinstaller и msix. Хотя процесс установки
обычно работает так, как ожидалось, иногда он дает сбой, поэтому мы составили список проблем и решений.

### App installation failed with error message: error 0xC00CEE23 The XML in the .appinstaller file is not valid: Line 33, Column 5, Reason: '>' expected. (Oxc00cee23)

> Перевод: Установка приложения не удалась с сообщением об ошибке: ошибка 0xC00CEE23 XML в файле .appinstaller недействителен: строка 33, столбец 5, причина: ожидается «>» (Oxc00cee23)

Обычно эту проблему можно решить, перезапустив Windows и снова запустив программу установки.

### An error occurred while accessing the file from the web. Please try downloading and opening the file locally

> Перевод: Произошла ошибка при доступе к файлу из Интернета. Пожалуйста, попробуйте загрузить и открыть файл локально

Нет никакого известного решения этой проблемы.

### Windows can't open this type of file (.appinstaller)

> Перевод: Windows не может открыть данный тип файла (.appinstaller)

Это происходит, когда компонент установщика приложений отсутствует в Windows, и его можно решить, выполнив команду сброса магазина `wsreset -i` в PowerShell или командной строке.
