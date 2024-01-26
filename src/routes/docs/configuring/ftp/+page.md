---
title: Connecting to FTP servers
---

Files has built-in support for connecting to remote FTP and FTPs servers.
This allows you to effortlessly connect to any server that supports these protocols, browse the directory structure, and perform tasks such as editing, renaming, and deleting files or folders according to your needs.

## How to connect to FTP servers

You can connect to remote servers from the address bar

**FTP:** `ftp://<server_address>:<port>`.  
**FTPs:** `ftps://<server_address>:<port>`.

If you don't specify the port, the default port will be used:

**FTP:** `21`.  
**FTPs:** `990`.

If required, you will be prompted to enter your credentials to login.  

## How to disconnect from FTP servers

Closing the tab or window will automatically disconnect from the server.

## Known limitations

- SFTP is not currently supported
