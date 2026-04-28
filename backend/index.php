<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

// Default to a 404 if not found
$response = ['status' => 'error', 'message' => 'Route not found'];
$code = 404;

// Simple router based on path
// Assuming the path is /airbnb/backend/api/... 
// We check for 'api' and the endpoint
$endpoint = "";
foreach ($uri as $key => $segment) {
    if ($segment === 'api' && isset($uri[$key+1])) {
        $endpoint = rtrim($uri[$key+1], '/');
        break;
    }
}

switch($endpoint) {
    case 'properties':
        require_once 'controllers/PropertyController.php';
        $controller = new PropertyController();
        $code = 200;
        $response = clone_func_or_call($controller, $_SERVER['REQUEST_METHOD']);
        break;
    case 'auth':
        require_once 'controllers/AuthController.php';
        $controller = new AuthController();
        $code = 200;
        $response = get_auth_response($controller, $_SERVER['REQUEST_METHOD']);
        break;
    case 'recommendations':
        // Mock AI recommendations
        $code = 200;
        $response = [
            'status' => 'success',
            'data' => [
                'message' => 'Based on your history, users like you enjoy beachfront properties.',
                'suggested_filters' => ['location' => 'beach', 'max_price' => 300]
            ]
        ];
        break;
    default:
        $response = [
            'status' => 'success',
            'message' => 'Airbnb Clone API Sandbox is running! Try /api/properties'
        ];
        $code = 200;
        break;
}

http_response_code($code);
echo json_encode($response);

// Helper function to simulate routing for demo
function clone_func_or_call($controller, $method) {
    if ($method === 'GET') {
        return $controller->getProperties();
    }
    return ['status' => 'error', 'message' => 'Method not allowed'];
}

function get_auth_response($controller, $method) {
    if ($method === 'POST') {
        return $controller->login();
    }
    return ['status' => 'error', 'message' => 'Method not allowed'];
}
