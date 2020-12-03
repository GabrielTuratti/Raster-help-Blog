const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = {
  authMiddlware(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const token = authorization.replace("Bearer", "").trim();

    try {
      const data = jwt.verify(token, "secret");

      const { id, user_type } = data;

      req.userId = id;
      req.user_type = user_type;

      return next();
    } catch {
      return res.sendStatus(401);
    }
  },
};
