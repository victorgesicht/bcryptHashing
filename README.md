learning bcryptHashing wiki!

------------------------------------------------------------------------------------------------------------------------------------------
This is a short documentation on what I've so far learnt about bcrytpt hashing algorithm.

Installation:: npm i bcrypt

Has it's method to perform functions i.e bycyrpt.genSalt, bycrypt.hash

Asynch and await are important parts of the code to prevent blocking of the main threads.

BCRYPT KEY skeleton:

str: "abc"
$2b$10$wHoplV8Nk0fOYIWQb6MzGe 29

$2b$10$wHoplV8Nk0fOYIWQb6MzGeYoDRPSssnE4rD5Zrn3CqhbUaZJ9tI0i 60
-------------------------------------------------------------------------------------------------------------
$2b                   |    $10                   |                  $wHoplV8Nk0fOYIWQb6MzGe
-------------------------------------------------------------------------------------------------------------
algorithm identifier  |  number of rounds        |                    salt/random string               

-------------------------------------------------------------------------------------------------------------
AFTER HASHING::
----------------------------------------------------------------------------------------------------------------------------------------
$2y                    |        $10                |        $wHoplV8Nk0fOYIWQb6MzGe         |         YoDRPSssnE4rD5Zrn3CqhbUaZJ9tI0i
----------------------------------------------------------------------------------------------------------------------------------------
algorithm identifier   |    number of rounds       |                 salt                   |          value/secret hash                                 
----------------------------------------------------------------------------------------------------------------------------------------
