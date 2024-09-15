<?php
// Get the requested URI (after the domain)
$request = $_SERVER['REQUEST_URI'];

// Simple routing logic
switch ($request) {
    case '/footballPage':
        include 'Different Pages/footballPage.html';
        break;

    case '/sondagePage':
        include 'Different Pages/sondagePage.html';
        break;

    case '/blogpostPage':
        include 'Different Pages/blogpostPage.html';
        break;

    default:
        http_response_code(404);
        echo "Page not found!";
        break;
}
?>
