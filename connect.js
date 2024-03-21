const express = require('express');
const mysql = require('mysql');
const con = mysql.createConnection({
  host: ' databasessc.c7428qqac1q4.eu-west-3.rds.amazonaws.com',
  port:'3306',
  user: 'admin',
  password: 'supnum1234',
  database: 'sscsupnum'
});

con.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données !', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
});