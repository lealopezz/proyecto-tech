
# [Tech Streetwear](URL "https://tech.cleverapps.io/")

## Pautas de entrega Opcionales

* Etiquetas semánticas de HTML
* Llamada a un JSON interno
* Muy responsive (😅)
* Usa Express
* Usa Express con MySQL
* Manejo de paquetes
* Sitio subido a Clever Cloud (Heroku no me tomaba la tarjeta)

#### id  name    color   price   img

``` SQL
INSERT INTO product VALUES
(1, 'N1 CARGO', 'BLACK', 60, '/images/pant1.webp'),
(2, 'N1 CARGO', 'GREEN', 60, '/images/pant2.webp'),
(3, 'C14 CARGO', 'BLACK', 65, '/images/pant3.webp'),
(4, 'N1 CARGO', 'ORANGE', 60, '/images/pant4.webp'),
(5, 'C11 CARGO', 'CAMO', 55, '/images/pant5.webp'),
(6, 'V1 CARGO', 'LIGHTBLUE', 60, '/images/pant6.webp'),
(7, 'X1 CARGO', 'BLACK', 65, '/images/pant7.webp'),
(8, 'C50 CARGO', 'BLACK', 70, '/images/pant8.webp');`
```


#### id  size    stock   productId

``` SQL
INSERT INTO size VALUES
(1, 'S', 15, 1),
(2, 'M', 15, 1),
(3, 'L', 15, 1),
(4, 'S', 15, 2),
(5, 'M', 15, 2),
(6, 'L', 15, 2),
(7, 'S', 15, 3),
(8, 'M', 15, 3),
(9, 'L', 15, 3),
(10, 'S', 15, 4),
(11, 'M', 15, 4),
(12, 'L', 15, 4),
(13, 'S', 15, 5),
(14, 'M', 15, 5),
(15, 'L', 15, 5),
(16, 'S', 15, 6),
(17, 'M', 15, 6),
(18, 'L', 15, 6),
(19, 'S', 15, 7),
(20, 'M', 15, 7),
(21, 'L', 15, 7),
(22, 'S', 15, 8),
(23, 'M', 15, 8),
(24, 'L', 15, 8);
```