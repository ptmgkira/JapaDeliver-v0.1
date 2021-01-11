INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Missoshiro Simples', 15.20, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/MissoshiroNormal.jpg', 'Missoshiro com missô,tempero sabor peixe,repolho,tofu e cebolinha.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Oniguiri De Atum', 8.20, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/OniguiriNormal.jpg', 'Onigiri com gohan,tiras de Nori e Atum.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Ramen', 45.0, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/RamenNormal.jpg', 'Ramen com caldo de galinha,caldo de porco,molho shoyu,macarrão,lombo de porco,Kombucha,broto de bambu,Kamaboko e Ovos Cozidos.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Robata', 52.0, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/RobataNormal.jpg', 'Robata com Maggi,cebola,tomate,palmitos,
brócolis,abobrinha no molho de laranja amido de milho e shoyu.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Sashimim De Atum', 25.90, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/SashimiAtumNormal.jpg', 'Sashimim De Atum.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Sushi Com Caviar', 30.90, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/SushinCaviar.jpg', 'Sushi com Gohan,shoyu e Caviar.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Sushi De Salmão', 15.90, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/SushinNormal.jpg', 'Sushi Com Gohan,Salmão no Nori.');
INSERT INTO tb_product (name, price, image_Uri, description) VALUES ('Udon', 35.90, 'https://raw.githubusercontent.com/ptmgkira/JapaDeliver-v0.1/main/ImgTemplate/UdonNormal.jpg', 'Udon com Hondashi,shoyu,Aji No Moto,macarrão e cebolinha verde.');

INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -22.946779, -43.217753, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T15:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -25.439787, -49.237759, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T16:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T12:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (1, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T08:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T14:00:00Z');
INSERT INTO tb_order (status, latitude, longitude, address, moment) VALUES (0, -23.561680, -46.656139, 'Avenida Paulista, 1500', TIMESTAMP WITH TIME ZONE '2021-01-01T09:00:00Z');

INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (1 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (2 , 8);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 3);
INSERT INTO tb_order_product (order_id, product_id) VALUES (3 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 2);
INSERT INTO tb_order_product (order_id, product_id) VALUES (4 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 4);
INSERT INTO tb_order_product (order_id, product_id) VALUES (5 , 6);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 5);
INSERT INTO tb_order_product (order_id, product_id) VALUES (6 , 1);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 7);
INSERT INTO tb_order_product (order_id, product_id) VALUES (7 , 5);