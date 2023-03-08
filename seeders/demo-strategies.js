"use strict";

/** @type {import('sequelize-cli').Migration} */

const db = require("../models");
const { UserStrategy } = db;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "strategies",
      [
        {
          symbol: "AAPL",
          title: "Strategy Alpha",
          capital: 10000,
          start_date: "2021-03-23",
          end_date: "2022-03-23",
          sSMA: 50,
          lSMA: 200,
          qty_shares: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "BABA",
          title: "Strategy Bravo",
          capital: 20000,
          start_date: "2021-04-24",
          end_date: "2022-04-24",
          sSMA: 50,
          lSMA: 100,
          qty_shares: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "TSLA",
          title: "Strategy Charlie ",
          capital: 30000,
          start_date: "2021-05-25",
          end_date: "2022-05-25",
          sSMA: 20,
          lSMA: 50,
          qty_shares: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "DIS",
          title: "Strategy Delta",
          capital: 10000,
          start_date: "2021-06-26",
          end_date: "2021-12-26",
          sSMA: 50,
          lSMA: 200,
          qty_shares: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "CRM",
          title: "Strategy Echo",
          capital: 20000,
          start_date: "2021-07-27",
          end_date: "2022-01-27",
          sSMA: 50,
          lSMA: 100,
          qty_shares: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "ZM",
          title: "Strategy Foxtrot",
          capital: 10000,
          start_date: "2021-03-23",
          end_date: "2022-03-23",
          sSMA: 50,
          lSMA: 100,
          qty_shares: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "SOFI",
          title: "Strategy Golf",
          capital: 30000,
          start_date: "2021-08-28",
          end_date: "2022-08-28",
          sSMA: 20,
          lSMA: 50,
          qty_shares: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "ABNB",
          title: "Strategy Hotel",
          capital: 20000,
          start_date: "2021-03-23",
          end_date: "2021-09-23",
          sSMA: 20,
          lSMA: 50,
          qty_shares: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          symbol: "TWLO",
          title: "Strategy India",
          capital: 30000,
          start_date: "2021-03-23",
          end_date: "2021-09-23",
          sSMA: 50,
          lSMA: 100,
          qty_shares: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { include: [UserStrategy] }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("strategies", null, {
      include: [UserStrategy],
    });
  },
};
