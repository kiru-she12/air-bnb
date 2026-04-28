<?php
class AuthController {
    public function login() {
        return [
            'status' => 'success',
            'data' => [
                'token' => 'dummy-jwt-token-123',
                'user' => [
                    'id' => 1,
                    'name' => 'John Doe',
                    'email' => 'john@example.com'
                ]
            ]
        ];
    }
}
