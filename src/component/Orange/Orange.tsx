import React from "react";
import "./Orange.css";
import Dates from "../../shared/dates";
import Names from "../../shared/Names";
function Orange() {
    const limit = Math.floor(Math.random() * (100 - 6 + 1)) + 6;

  return (
    <div className="app__orange">
      <div className="orange__header">
        <div className="orage__left">
          <span className="orange__time"> {Dates.currentTime()}</span>
        </div>
        <div className="hdk__right">
          <div className="hdk__data">
            <div className="data__1">
              <div></div>
              <div className="div__4"></div>
              <div className="div__5"></div>
              <div className="div__6 __grey"></div>
            </div>
            <div className="data__2">
              <div></div>
              <div></div>
              <div className=""></div>
              <div className="__grey"></div>
            </div>
          </div>
          <div className="hdk__4g">{Names.generateRandomSignal()}</div>
          <div className="styling__battery">
            <div className="battery">
              <div
                className="battery__levelbank"
                style={{ width: `${limit}%` }}
              ></div>
            </div>
            <div className="battery__bar"></div>
          </div>
        </div>
      </div>

      <div className="orange__subheader">
        <div className="subheader__orange">
          <div className="back__image">
            <img src="/orange/back.png" alt="" width={7.5} height={15} />
          </div>
          <div className="subheader__title">交易詳情</div>
          <div></div>
        </div>

        <div className="subheader__bar">
          <div className="__red"></div>
          <div className="__orange"></div>
          <div className="__yellow"></div>
        </div>
      </div>

      <div className="orange__detaill">
        <div className="orange__transaction">
          <label htmlFor="" className="orange__label">
            交易日期
          </label>
          <span className="orange__date">20-05-2023</span>
        </div>
        <div className="orange__transaction __16">
          <label htmlFor="">入帳日期</label>
          <span className="orange__date">20-05-2023</span>
        </div>

        <div className="orange__transaction __19">
          <label htmlFor="">项目</label>
          <span className="orange__name">
            PAYBUDDY - TO Murray D**** C**** S******{" "}
          </span>
        </div>
        <div className="orange__transaction __16">
          <label htmlFor="" className="text__amount">
            卡號
          </label>
          <span className="orange__card">5599-11**-****-4350</span>
        </div>

        <div className="orange__transaction __16">
          <label htmlFor="">金額</label>
          <span className="amoutn__orange">HKD 980.00</span>
        </div>

        <div className="orange__transaction __16">
          <label htmlFor="">收款人姓名：</label>
          <span className="payname__orange">Murray D**** C**** S******</span>
        </div>

        <div className="orange__transaction __16">
          <label htmlFor="">收款帳戶</label>
          <span className="transaction__orange">36883204481</span>
        </div>

        <div className="orange__transaction __13">
          <label htmlFor="">[轉數快]交易參考編號：</label>
          <span className="ref__orange">FRN20230520PAYC0101060593932</span>
        </div>

        <div className="orange__transaction __14">
          <label htmlFor="">金額</label>
          <span className="status__orange">SUCCESS</span>
        </div>
      </div>

      <div className="orange__bottom"></div>
    </div>
  );
}

export default Orange;
