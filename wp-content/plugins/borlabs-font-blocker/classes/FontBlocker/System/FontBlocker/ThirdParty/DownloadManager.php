<?php

declare(strict_types=1);

namespace Borlabs\FontBlocker\System\FontBlocker\ThirdParty;

use Exception;

class DownloadManager
{
    public static function register(): void
    {
        update_option('__wpdm_google_font', '');
    }

    public function __construct()
    {
    }

    public function __clone()
    {
        throw new Exception('Cloning is not allowed.', E_USER_ERROR);
    }

    public function __wakeup(): void
    {
        throw new Exception('Unserialize is forbidden.', E_USER_ERROR);
    }
}
