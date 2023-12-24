const CURRENT_VERSION = '7.1';

    document.addEventListener('DOMContentLoaded', function() {
        // Get version from localStorage
        const storedVersion = localStorage.getItem('site_version');

        // Check if the versions don't match or if storedVersion is null
        if (storedVersion === null || storedVersion !== CURRENT_VERSION) {
            // Update the version in localStorage
            localStorage.setItem('site_version', CURRENT_VERSION);

            // Force a hard reload to bypass cache
            location.reload(true);
        }
    });
