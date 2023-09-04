---
title: Connecting to FTP servers
---

Files has built-in support for connecting to remote FTP and FTPs servers.
This allows you to effortlessly connect to any server that supports these protocols, browse the directory structure, and perform tasks such as editing, renaming, and deleting files or folders according to your needs.

## How to connect to a FTP server

You can connect to remote servers from the address bar

**FTP:** `ftp://<server_address>:<port>`.  
**FTPs :** `ftps://<server_address>:<port>`.

If you don't specify the port, the default port will be used:

**FTP :** `21`.  
**FTPs :** `990`.

Then if dialog appears, enter your credentials or login as anonymous user.  
After that, you will be able to view the directory structure of the server.

## Disconnecting from FTP server

To disconnect from the server, close tab or window with the server.

## Known limitations

Currently Files only supports the FTP and FTPs protocols.  
SFTP is not supported yet.
