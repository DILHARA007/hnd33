<?php

include 'db.php';

// Query to fetch products
$sql = "SELECT name, image_path, price, description, stars FROM products";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

// Output JSON
header('Content-Type: application/json');
echo json_encode($products);

$conn->close();
?>