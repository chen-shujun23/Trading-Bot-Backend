"use strict";
const { Model } = require("sequelize");
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TrendIndicator extends Model {
    static associate(models) {
      // define association here
      TrendIndicator.hasMany(models.Strategy, {
        foreignKey: "trend_indicator_id",
      });
    }
  }
  TrendIndicator.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sSMA: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: { isInt: true },
      },
      lSMA: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: { isInt: true },
      },
    },
    {
      sequelize,
      tableName: "trend_indicators",
      modelName: "TrendIndicator",
      indexes: [
        {
          unique: true,
          fields: ["sSMA", "lSMA"],
        },
      ],
    }
  );
  return TrendIndicator;
};
