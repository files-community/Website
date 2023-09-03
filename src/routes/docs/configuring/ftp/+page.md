---
title: Connecting to FTP servers
---

Files supports connecting to remote FTP and FTPs servers.
This allows you to effortlessly connect to any server that supports these protocols, browse the directory structure, and perform tasks such as uploading, downloading, renaming, and deleting files or folders according to your needs.

_Currently Files only supports the FTP and FTPs protocols. SFTP is not supported yet._

## How to connect to a FTP server

You can connect to the remote server by typing in the address bar:

**FTP :** `ftp://<server_address>:<port>`.
- `ftps://<server_address>:<port>` if you want to connect via FTPs protocol.

If you don't specify the port, the default port will be used:

- `21` for FTP protocol.
- `990` for FTPs protocol.

Then if dialog appears, enter your credentials or login as anonymous user.

After that, you will be able to view the directory structure of the server.

## Disconnecting from FTP server

To disconnect from the server, close tab or window with the server.
