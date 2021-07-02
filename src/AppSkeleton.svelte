<script>
    import { Flex } from 'components';

    /*
     * Currently, there's a lot of boilerplate here, and the code behind it is a bit messy.
     * ==================================================================================
     * I plan to redo some things and maybe split the skeleton itself into subcomponents,
     * but the design of Files v2 is constantly changing, so it would be difficult to keep 
     * up, so i'll probably wait until a more finalized design is decided on before finishing
     * the skeleton.
     */

    const files = [
        {
            name: '.github',
            type: 'File Folder',
            icon: 'folder',
            modified: '17 days ago'
        },
        {
            name: 'Common',
            type: 'File Folder',
            icon: 'folder',
            modified: 'last month'
        },
        {
            name: 'Files.Launcher',
            type: 'File Folder',
            icon: 'folder',
            modified: '3 days ago'
        },
        {
            name: 'Files.Package',
            type: 'File Folder',
            icon: 'folder',
            modified: '2 months ago'
        },
        {
            name: 'Files',
            type: 'File Folder',
            icon: 'folder',
            modified: 'yesterday'
        },
        {
            name: 'builds',
            type: 'File Folder',
            icon: 'folder',
            modified: '25 days ago'
        },
        {
            name: '.gitattributes',
            type: 'GITATTRIBUTES File',
            icon: 'file',
            modified: '3 years ago',
            size: '2.46 KB'
        },
        {
            name: '.gitignore',
            type: 'GITIGNORE File',
            icon: 'file',
            modified: '3 months ago',
            size: '5.47 KB'
        },
        {
            name: 'CODE_OF_CONDUCT.md',
            type: 'MD File',
            icon: 'text',
            modified: '2 months ago',
            size: '6.16 KB'
        },
        {
            name: 'Files.sln',
            type: 'Visual Studio Solution',
            icon: 'file',
            modified: '2 months ago',
            size: '8.7 KB'
        },
        {
            name: 'LICENSE',
            type: 'File',
            icon: 'file',
            modified: '5 months ago',
            size: '34.3 KB'
        },
        {
            name: 'Privacy.md',
            type: 'MD File',
            icon: 'text',
            modified: '5 months ago',
            size: '332 B'
        },
        {
            name: 'README.md',
            type: 'MD File',
            icon: 'text',
            modified: '25 days ago',
            size: '2.28 KB'
        }
    ];
</script>

<template>
    <div class="acrylic-material app-skeleton">
        <Flex id="app-skeleton-splitview">
            <aside class="app-sidebar">
                <Flex align="center" id="app-skeleton-sidebar-header">
                    <button class="sidebar-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M2.75254 17.9997H21.2525C21.6667 17.9997 22.0025 18.3355 22.0025 18.7497C22.0025 19.1294 21.7204 19.4432 21.3543 19.4928L21.2525 19.4997H2.75254C2.33832 19.4997 2.00254 19.1639 2.00254 18.7497C2.00254 18.37 2.28469 18.0562 2.65077 18.0065L2.75254 17.9997H21.2525H2.75254ZM2.75254 11.5027H21.2525C21.6667 11.5027 22.0025 11.8385 22.0025 12.2527C22.0025 12.6324 21.7204 12.9462 21.3543 12.9959L21.2525 13.0027H2.75254C2.33832 13.0027 2.00254 12.6669 2.00254 12.2527C2.00254 11.873 2.28469 11.5592 2.65077 11.5095L2.75254 11.5027H21.2525H2.75254ZM2.75168 5.00293H21.2517C21.6659 5.00293 22.0017 5.33872 22.0017 5.75293C22.0017 6.13263 21.7195 6.44642 21.3535 6.49608L21.2517 6.50293H2.75168C2.33746 6.50293 2.00168 6.16714 2.00168 5.75293C2.00168 5.37323 2.28383 5.05944 2.64991 5.00978L2.75168 5.00293H21.2517H2.75168Z" fill="currentColor"/>
                        </svg>
                    </button>
                    <h5>Files</h5>
                </Flex>
                <ul class="app-sidebar-scroller">
                    <li class="selected">test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </aside>
            <main class="app-content">
                <header class="app-content-header">
                    <nav class="tab-bar">
                        <div class="tab selected">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M5.25 3C3.45507 3 2 4.45507 2 6.25V21.75C2 23.5449 3.45507 25 5.25 25H12.01V27.0013L9.01196 27.0013C8.45967 27.0013 8.01196 27.4488 8.01196 28.0007C8.01197 28.5526 8.45969 29 9.01197 29L23.0043 28.9999C23.5565 28.9999 24.0042 28.5525 24.0042 28.0005C24.0042 27.4486 23.5565 27.0012 23.0042 27.0012L20.0059 27.0012V25H26.75C28.5449 25 30 23.5449 30 21.75V6.25C30 4.45507 28.5449 3 26.75 3H5.25ZM18.0059 25V27.0013L14.01 27.0013V25H18.0059ZM4 6.25C4 5.55964 4.55964 5 5.25 5H26.75C27.4404 5 28 5.55964 28 6.25V21.75C28 22.4404 27.4404 23 26.75 23H5.25C4.55964 23 4 22.4404 4 21.75V6.25Z" fill="currentColor"/>
                            </svg>
                            Preview
                        </div>
                        <div class="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12Z M11 11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11Z M13 12C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10C12.4477 10 12 10.4477 12 11C12 11.5523 12.4477 12 13 12Z M3 5.5C3 4.11929 4.11929 3 5.5 3H14.5C15.8807 3 17 4.11929 17 5.5V14.5C17 15.8807 15.8807 17 14.5 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5ZM5.5 4C4.67157 4 4 4.67157 4 5.5V14.5C4 15.3284 4.67157 16 5.5 16H14.5C15.3284 16 16 15.3284 16 14.5V7H9.5C8.67157 7 8 6.32843 8 5.5V4H5.5ZM16 5.5C16 4.67157 15.3284 4 14.5 4H9V5.5C9 5.77614 9.22386 6 9.5 6H16V5.5Z" fill="currentColor"/>
                            </svg>
                            New Tab
                        </div>
                        <button class="new-tab-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14.5 13.0001V3.75391C14.5 3.33991 14.164 3.00391 13.75 3.00391C13.336 3.00391 13 3.33991 13 3.75391V13.0001H3.75388C3.33988 13.0001 3.00388 13.3361 3.00388 13.7501C3.00388 14.1641 3.33988 14.5001 3.75388 14.5001H13V23.7525C13 24.1665 13.336 24.5025 13.75 24.5025C14.164 24.5025 14.5 24.1665 14.5 23.7525V14.5001L23.7498 14.5032C24.1638 14.5032 24.4998 14.1672 24.4998 13.7532C24.4998 13.3392 24.1638 13.0032 23.7498 13.0032L14.5 13.0001Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </nav>
                    <Flex id="app-skeleton-navigation-container">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M44 24C44 24.6904 43.4404 25.25 42.75 25.25H10.3041L23.1264 37.8586C23.6187 38.3426 23.6253 39.134 23.1413 39.6263C22.6572 40.1185 21.8658 40.1252 21.3736 39.6411L6.38563 24.903C6.37656 24.8943 6.36759 24.8854 6.35872 24.8764C6.14696 24.6611 6.02911 24.3884 6.00476 24.1094C5.99775 24.029 5.99848 23.9481 6.00696 23.8679C6.03557 23.5967 6.15267 23.333 6.35872 23.1234C6.37242 23.1095 6.38611 23.096 6.39982 23.0829L21.3736 8.35872C21.8658 7.87468 22.6572 7.88134 23.1413 8.37358C23.6253 8.86582 23.6187 9.65724 23.1264 10.1413L10.304 22.75H42.75C43.4404 22.75 44 23.3096 44 24Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M4 23.9999C4 23.3096 4.55964 22.7499 5.25 22.7499H37.6959L24.8736 10.1413C24.3813 9.65725 24.3747 8.86582 24.8587 8.37358C25.3428 7.88134 26.1342 7.87468 26.6264 8.35872L41.6144 23.0969C41.6234 23.1056 41.6324 23.1145 41.6413 23.1235C41.853 23.3389 41.9709 23.6115 41.9952 23.8906C42.0023 23.9709 42.0015 24.0518 41.993 24.132C41.9644 24.4032 41.8473 24.667 41.6413 24.8765C41.6276 24.8904 41.6139 24.9039 41.6002 24.917L26.6264 39.6413C26.1342 40.1253 25.3428 40.1187 24.8587 39.6264C24.3747 39.1342 24.3813 38.3427 24.8736 37.8587L37.696 25.2499H5.25C4.55964 25.2499 4 24.6903 4 23.9999Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M23.9999 44C23.3096 44 22.7499 43.4404 22.7499 42.75V10.3041L10.1413 23.1264C9.65725 23.6187 8.86582 23.6253 8.37358 23.1413C7.88134 22.6572 7.87468 21.8658 8.35872 21.3736L23.0969 6.38563C23.1056 6.37656 23.1145 6.36759 23.1235 6.35872C23.3389 6.14696 23.6115 6.02911 23.8906 6.00476C23.9709 5.99775 24.0518 5.99848 24.132 6.00696C24.4032 6.03557 24.667 6.15267 24.8765 6.35872C24.8904 6.37242 24.9039 6.38611 24.917 6.39982L39.6413 21.3736C40.1253 21.8658 40.1187 22.6572 39.6264 23.1413C39.1342 23.6253 38.3427 23.6187 37.8587 23.1264L25.2499 10.304V42.75C25.2499 43.4404 24.6903 44 23.9999 44Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 11.6236 19.4723 11.2538 19.4188 10.8923C19.3515 10.4382 19.6839 10 20.1429 10C20.5138 10 20.839 10.2562 20.8953 10.6228C20.9642 11.0718 21 11.5317 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168V4.25C18 3.83579 18.3358 3.5 18.75 3.5C19.1642 3.5 19.5 3.83579 19.5 4.25V7.25C19.5 7.66421 19.1642 8 18.75 8H15.75C15.3358 8 15 7.66421 15 7.25C15 6.83579 15.3358 6.5 15.75 6.5H17.0991C15.7609 5.25883 13.9691 4.5 12 4.5Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <div class="address-bar">Preview</div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C23.4159 34 26.5461 32.7766 28.9763 30.7441L39.8662 41.6339C40.3543 42.122 41.1458 42.122 41.6339 41.6339C42.1221 41.1457 42.1221 40.3543 41.6339 39.8661L30.7441 28.9763C32.7766 26.5461 34 23.4159 34 20C34 12.268 27.732 6 20 6ZM8.5 20C8.5 13.6487 13.6487 8.5 20 8.5C26.3513 8.5 31.5 13.6487 31.5 20C31.5 26.3513 26.3513 31.5 20 31.5C13.6487 31.5 8.5 26.3513 8.5 20Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </Flex>
                    <Flex id="app-skeleton-options-container" align="center" justify="end">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.78033 4.78033C7.07322 4.48744 7.07322 4.01256 6.78033 3.71967C6.48744 3.42678 6.01256 3.42678 5.71967 3.71967L3.75 5.68934L3.28033 5.21967C2.98744 4.92678 2.51256 4.92678 2.21967 5.21967C1.92678 5.51256 1.92678 5.98744 2.21967 6.28033L3.21967 7.28033C3.51256 7.57322 3.98744 7.57322 4.28033 7.28033L6.78033 4.78033ZM21.25 18.0068H9.75L9.64823 18.0137C9.28215 18.0634 9 18.3772 9 18.7568C9 19.1711 9.33579 19.5068 9.75 19.5068H21.25L21.3518 19.5C21.7178 19.4503 22 19.1365 22 18.7568C22 18.3426 21.6642 18.0068 21.25 18.0068ZM21.25 11.5H9.75L9.64823 11.5068C9.28215 11.5565 9 11.8703 9 12.25C9 12.6642 9.33579 13 9.75 13H21.25L21.3518 12.9932C21.7178 12.9435 22 12.6297 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5ZM21.25 5H9.75L9.64823 5.00685C9.28215 5.05651 9 5.3703 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H21.25L21.3518 6.49315C21.7178 6.44349 22 6.1297 22 5.75C22 5.33579 21.6642 5 21.25 5ZM6.78033 17.7803C7.07322 17.4874 7.07322 17.0126 6.78033 16.7197C6.48744 16.4268 6.01256 16.4268 5.71967 16.7197L3.75 18.6893L3.28033 18.2197C2.98744 17.9268 2.51256 17.9268 2.21967 18.2197C1.92678 18.5126 1.92678 18.9874 2.21967 19.2803L3.21967 20.2803C3.51256 20.5732 3.98744 20.5732 4.28033 20.2803L6.78033 17.7803ZM6.78033 10.2197C7.07322 10.5126 7.07322 10.9874 6.78033 11.2803L4.28033 13.7803C3.98744 14.0732 3.51256 14.0732 3.21967 13.7803L2.21967 12.7803C1.92678 12.4874 1.92678 12.0126 2.21967 11.7197C2.51256 11.4268 2.98744 11.4268 3.28033 11.7197L3.75 12.1893L5.71967 10.2197C6.01256 9.92678 6.48744 9.92678 6.78033 10.2197Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M10.75 15C11.9926 15 13 16.0074 13 17.25V22.75C13 23.9926 11.9926 25 10.75 25H5.25C4.00736 25 3 23.9926 3 22.75V17.25C3 16.0074 4.00736 15 5.25 15H10.75ZM22.75 15C23.9926 15 25 16.0074 25 17.25V22.75C25 23.9926 23.9926 25 22.75 25H17.25C16.0074 25 15 23.9926 15 22.75V17.25C15 16.0074 16.0074 15 17.25 15H22.75ZM10.75 16.5H5.25C4.83579 16.5 4.5 16.8358 4.5 17.25V22.75C4.5 23.1642 4.83579 23.5 5.25 23.5H10.75C11.1642 23.5 11.5 23.1642 11.5 22.75V17.25C11.5 16.8358 11.1642 16.5 10.75 16.5ZM22.75 16.5H17.25C16.8358 16.5 16.5 16.8358 16.5 17.25V22.75C16.5 23.1642 16.8358 23.5 17.25 23.5H22.75C23.1642 23.5 23.5 23.1642 23.5 22.75V17.25C23.5 16.8358 23.1642 16.5 22.75 16.5ZM10.75 3C11.9926 3 13 4.00736 13 5.25V10.75C13 11.9926 11.9926 13 10.75 13H5.25C4.00736 13 3 11.9926 3 10.75V5.25C3 4.00736 4.00736 3 5.25 3H10.75ZM22.75 3C23.9926 3 25 4.00736 25 5.25V10.75C25 11.9926 23.9926 13 22.75 13H17.25C16.0074 13 15 11.9926 15 10.75V5.25C15 4.00736 16.0074 3 17.25 3H22.75ZM10.75 4.5H5.25C4.83579 4.5 4.5 4.83579 4.5 5.25V10.75C4.5 11.1642 4.83579 11.5 5.25 11.5H10.75C11.1642 11.5 11.5 11.1642 11.5 10.75V5.25C11.5 4.83579 11.1642 4.5 10.75 4.5ZM22.75 4.5H17.25C16.8358 4.5 16.5 4.83579 16.5 5.25V10.75C16.5 11.1642 16.8358 11.5 17.25 11.5H22.75C23.1642 11.5 23.5 11.1642 23.5 10.75V5.25C23.5 4.83579 23.1642 4.5 22.75 4.5Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M8.75 8C6.12665 8 4 10.1266 4 12.75V35.25C4 37.8734 6.12665 40 8.75 40H39.25C41.8734 40 44 37.8734 44 35.25V12.75C44 10.1266 41.8734 8 39.25 8H8.75ZM6.5 12.75C6.5 11.5074 7.50736 10.5 8.75 10.5H29V37.5H8.75C7.50736 37.5 6.5 36.4926 6.5 35.25V12.75ZM31.5 37.5V10.5H39.25C40.4926 10.5 41.5 11.5074 41.5 12.75V35.25C41.5 36.4926 40.4926 37.5 39.25 37.5H31.5Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M15.752 24C15.752 25.7949 14.2969 27.25 12.502 27.25C10.707 27.25 9.25195 25.7949 9.25195 24C9.25195 22.2051 10.707 20.75 12.502 20.75C14.2969 20.75 15.752 22.2051 15.752 24Z M27.252 24C27.252 25.7949 25.7969 27.25 24.002 27.25C22.207 27.25 20.752 25.7949 20.752 24C20.752 22.2051 22.207 20.75 24.002 20.75C25.7969 20.75 27.252 22.2051 27.252 24Z M35.502 27.25C37.2969 27.25 38.752 25.7949 38.752 24C38.752 22.2051 37.2969 20.75 35.502 20.75C33.707 20.75 32.252 22.2051 32.252 24C32.252 25.7949 33.707 27.25 35.502 27.25Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </Flex>
                </header>
                <article class="files-view">
                    <table class="files-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Date Modified</th>
                                <th>Type</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each files as file}
                                <tr tabindex="0">
                                    <td>
                                        <img src="./icons/{file.icon ?? 'file'}.ico" alt="{file.icon} icon" />
                                    </td>
                                    <td>{file.name}</td>
                                    <td>{file.modified}</td>
                                    <td>{file.type}</td>
                                    <td>{file.size ?? ''}</td>
                                </tr>
                            {/each}
                        </tbody>
                      </table>
                </article>
            </main>
        </Flex>
    </div>
</template>

<style lang="scss">
    .app-skeleton {
        user-select: none;
        position: relative;
        right: -72px;
        width: auto;
        height: 70vh;
        max-height: 600px;
        aspect-ratio: 34 / 27;
        border-radius: 4px 0 0 4px;
        box-shadow: 0 2.74416px 2.74416px rgb(0 0 0 / 3%),
                    0 5.48831px 5.48831px rgb(0 0 0 / 4%),
                    0 13.7208px 10.9766px rgb(0 0 0 / 5%),
                    0 20.5812px 20.5812px rgb(0 0 0 / 6%),
                    0 41.1623px 41.1623px rgb(0 0 0 / 7%),
                    0 96.0454px 89.1851px rgb(0 0 0 / 9%);
        * {
            font-family: 'Segoe UI', sans-serif;
        }
        :global {
            #app-skeleton-navigation-container {
                gap: 6px;
            }
            #app-skeleton-navigation-container,
            #app-skeleton-options-container {
                padding: 4px 8px;
            }
            #app-skeleton-options-container {
                padding-top: 0;
            }
            #app-skeleton-splitview {
                height: 100%;
                zoom: 80%;
            }
            #app-skeleton-sidebar-header {
                padding: 8px;
            }
        }
    }
    .address-bar {
        display: flex;
        align-items: center;
        padding: 0 8px;
        font-size: 14px;
        font-weight: 600;
        height: 36px;
        flex: 1 1 auto;
        background-color: #fff;
        border: none;
        box-shadow: inset 0 -1px 0 #8b8b8b, inset 0 0 0 1px #bebebe !important;
        border-radius: 5px;
    }
    .app-sidebar {
        flex: 0 0 auto;
        width: 250px;
        .sidebar-button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 45px;
            width: 50px;
            border: none;
            background: none;
            border-radius: 4px;
            margin-right: 8px;
            svg {
                transition: transform 150ms ease;
            }
            &:hover {
                background-color: rgba(0, 0, 0, 0.03);
                svg {
                    transform: scaleX(0.85);
                }
            }
            &:active {
                background-color: rgba(0, 0, 0, 0.02);
                color: #5d5d5d;
                svg {
                    transform: scaleX(0.65);
                }
            }
        }
        .app-sidebar-scroller {
            margin: 0;
            padding: 8px;
            li {
                position: relative;
                display: flex;
                align-items: center;
                height: 40px;
                width: 100%;
                border-radius: 4px;
                padding: 0 14px;
                margin-bottom: 4px;
                color: #5d5d5d;
                font-weight: 400;
                &:active {
                    background-color: rgba(0, 0, 0, 0.02);
                }
                &:active,
                &.selected {
                    color: #000;
                }
                &:hover,
                &.selected {
                    background-color: rgba(0, 0, 0, 0.03);
                }
                &.selected::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    width: 3px;
                    height: 20px;
                    border-radius: 8px;
                    background-color: var(--accent);
                }
            }
        }
        h5 {
            margin: 0;
            line-height: normal;
            font-size: 16px;
            font-weight: 600;
            color: #000;
        }
    }
    .app-content {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        background-color: #f3f3f3;
        height: 100%;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.085);
        overflow: hidden;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 36px;
            width: 45px;
            background: none;
            border: none;
            border-radius: 5px;
            transition: 100ms ease transform;
            color: #5d5d5d;
            svg {
                width: 22px;
                height: auto;
            }
            &:hover {
                color: #000;
                background-color: #d3d3d3;
            }
            &:active {
                transform: scale(0.96);
            }
        }
    }
    .app-content-header {
        flex: 0 0 auto;
        background-color: #eeeeee;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.085);
        nav {
            padding: 12px;
            padding-top: 10px;
            padding-bottom: 4px;
            display: flex;
            align-items: center;
        }
    }
    .tab-bar {
        .tab {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 12px;
            font-size: 14px;
            height: 40px;
            width: 240px;
            margin-right: 12px;
            border-radius: 5px;
            color: #000;
            svg {
                width: 18px;
                height: auto;
                margin-right: 10px;
            }
            &::after {
                content: '';
                position: absolute;
                right: 0;
                height: 30px;
                border-left: 1px solid rgba(0, 0, 0, 0.25);
            }
            &:hover {
                background-color: #f9f9f9;
            }
            &:active,
            &.selected {
                background-color: #f9f9f9;
                box-shadow: inset 0 -1px 0 #cbcbcb, inset 0 0 0 1px #e0e0e0; 
            }
            &:hover, &:active, &.selected {
                &::after {
                    content: none;
                }
            }
            &.selected {
                font-weight: 500;
            }
        }
        .new-tab-button {
            width: 36px;
            svg {
                width: 18px;
            }
        }
    }
    .files-view {
        flex: 1 1 auto;
        padding: 0 12px;
        overflow: auto;
    }
    .files-table {
        border-collapse: collapse;
        width: 724px;
        th {
            position: sticky;
            top: 0;
            background-color: #f1f1f1;
            box-shadow: inset 0 -1px 0 #edebe9;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            height: 45px;
            &:first-child {
                width: 55px;
            }
        }
        td, th {
            padding: 0 16px;
        }
        tr:hover td,
        th:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        th:active {
            background-color: rgba(0, 0, 0, 0.2);
        }
        tr:focus {
            background: #61a9e0;
            &:hover td {
                background: #3191da;
            }
        }
        td {
            height: 40px;
            &:first-child {
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            img {
                width: 24px;
                height: auto;
            }
        }
    }
</style>