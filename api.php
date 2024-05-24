<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = [
    'status' => 'success',
    'message' => 'hello from php code - api.php',
    'users' => [
        ['id' => 1, 'name' => 'david jon'],
        ['id' => 2, 'name' => 'mary vay'],
    ]
];

echo json_encode($data);
