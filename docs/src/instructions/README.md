---
description: MyNTU Dashboard 帳號驗證平台使用說明。
---

# 帳號驗證平台使用說明
申請網址：[https://dashboard.myntu.me/auth](https://dashboard.myntu.me/auth)

## 帳號建立與驗證流程
無論是否有`國立臺灣大學 G Suite`，都必須為**國立臺灣大學教職員生**才可申請。[Terms and Conditions](/terms-and-conditions)

**國立臺灣大學** G Suite：
```
NTU G Suite 登入 -> 連結 Discord -> 連結 Minecraft ID -> 完成
```
**個人**帳號登入：
```
個人 Gmail 登入 -> 人工審核（請見`第二`點） -> "審核通過" -> 連結 Discord -> 連結 Minecraft ID -> 完成
```

## 1. 我沒有國立臺灣大學 G Suite，怎麼辦？
如果你沒有臺大 G Suite ，那我們會建議你去申請一個。

[申請連結](https://web4.cc.ntu.edu.tw/p/s/login3/p1.php)

請用計中帳號登入，登入後請點選 `設定 G Suite(Google Apps)服務`，並按照指示進行。

## 2. 我忘記臺灣大學 G Suite 密碼，或是任何原因無法登入，怎麼辦？
請先於 [https://dashboard.myntu.me/auth](https://dashboard.myntu.me/auth) 登入，並向 [MineNTU 粉絲團](https://facebook.com/minentu) 說明你的狀況，並請附上以下資料以供查證。（休學生或已無學籍學生亦可）

1. 姓名。
2. 註冊時的電子郵件。
3. 國立臺灣大學身分證明文件（請參考 [伺服器與 Discord 頻道申請資格](https://minecraft.myntu.me/terms-and-conditions/#%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%88%87-discord-%E9%A0%BB%E9%81%93%E7%94%B3%E8%AB%8B%E8%B3%87%E6%A0%BC)）。
4. 學號（包含系級更好）或員工編號。

例如：
```
猴王你好，我是資工一的ＸＸＸ（學號：B09902XXX），我無法登入我的 NTU G Suite 帳號，因此我用自己的電子郵件申請，我的電子郵件為 xxx@xxx.com。

附件是我的學生證，再請幫忙人工審核，謝謝！
```

我們將為你人工審核，審核時間可能長達**三至五天**個工作天。

*注意：我們將會嚴格審核，請不要盜用別人身份資料。如經確認為身份盜用，我們將**永久封鎖**您的申請權利。

## 3. 我綁定了錯誤的 Discord 帳號，Minecraft ID，怎麼辦？
請聯繫 [MineNTU 粉絲團](https://facebook.com/minentu)，我們將會人工處理。

## 4. 我沒有國立臺灣大學 G Suite，但我有系上的電子郵件，那我可以申請嗎？
可以。只要你系上的 Email 是 `ntu.edu.tw` 結尾即可申請。如資工系為 `csie.ntu.edu.tw`。

*注意：一定要是 `ntu.edu.tw` 結尾才會由系統自動審核，如資管系系上有 `@ntu.im` 之電子郵件，一樣是需要經過人工審核的，系統不會自動審核。

## 5. 註冊時彈出錯誤訊息 - `ACCOUNT_NOT_VERIFIED `，是什麼意思？
這個錯誤訊息意味著你登入的帳號並未經過驗證。有可能導致這個問題發生的原因有如下：

1. 並未經過人工驗證之**非國立臺灣大學與其各系所**之 G Suite 帳號登入。
2. 使用非 `ntu.edu.tw` 結尾之 Email 登入。

## 6. 連接 Discord 出現 - `DISCORD_OAUTH_FAILED `，是什麼意思？
這意味著與 Discord API 串接時發生了一點問題，原則上只要重新串接即可。

如有出現重新串接，卻持續出現錯誤訊息的狀況，請聯繫 [MineNTU 粉絲團](https://facebook.com/minentu)，我們將會人工處理。

## 7. `請先加入 MineNTU Discord 群組` 是什麼意思？
就是字面上的意思，你還沒有加入 **MineNTU Discord 群組**，請於加入後再次嘗試申請。

MineNTU Discord 連結：[https://bit.ly/359oLlv](https://bit.ly/359oLlv)

## 8. 我不是臺大學生，但我很想加入，怎麼辦？
我們很開心你對 MineNTU 有興趣，但因為目前人力不足的緣故，我們無法開放他校人員加入。對此，我們出一個解決方案 - `BlueMap`，你可以使用 BlueMap 觀賞 MineNTU。

Bluemine(BlueMap) 連結：[https://bluemine.myntu.me](https://bluemine.myntu.me)

## 9. 請問可以提供地圖檔嗎？
<u>**不會**</u>，目前也<u>**沒有**</u>公開開放的計畫。

## 10. 為什麼我同學登入後，右上角有系所名稱，但我沒有？
系所名稱是由學號自動產生，且目前只支援學士班（**T 或 B 開頭之學號**）學號。
 
## 11. 我覺得這個系統真的爛到瘋掉，每次用都覺得自己壽命少了許多，怎麼辦？
我很抱歉，但歡迎發送 Pull Request 給我。

前端：[https://github.com/MinecraftNTU/dashboard-v1](https://github.com/MinecraftNTU/dashboard-v1)

後端：[https://github.com/MinecraftNTU/service-api-v1](https://github.com/MinecraftNTU/service-api-v1)

## 12. 我是其他學校 / 單位的朋友，我可以使用這個平台作為我們的管理系統嗎？
可以。這兩個專案都是以 `AGPL-3.0 License` 為基礎提供大家使用，除原本授權條款外，請務必註記 Reference。

## 13. 我遇到的問題上面都未提及，怎麼辦？
請聯繫 [MineNTU 粉絲團](https://facebook.com/minentu)。
