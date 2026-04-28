<?php
class PropertyController {
    public function getProperties() {
        // Return dummy data for now
        return [
            'status' => 'success',
            'data' => [
                [
                    'id' => 1,
                    'title' => 'Beautiful Beach House',
                    'location' => 'Miami, FL',
                    'price_per_night' => 250,
                    'rating' => 4.98,
                    'host_trust_score' => 95,
                    'image' => 'placeholder'
                ],
                [
                    'id' => 2,
                    'title' => 'Cozy Mountain Cabin',
                    'location' => 'Aspen, CO',
                    'price_per_night' => 150,
                    'rating' => 4.75,
                    'host_trust_score' => 88,
                    'image' => 'placeholder'
                ],
                [
                    'id' => 3,
                    'title' => 'Luxury City Apartment',
                    'location' => 'New York, NY',
                    'price_per_night' => 400,
                    'rating' => 4.90,
                    'host_trust_score' => 99,
                    'image' => 'placeholder'
                ]
            ]
        ];
    }
}
