/*!
 * presets.v1.js - static data: fonts, option lists, design templates, sample messages
 *
 * Adding things:
 *   - a font:    add an entry to FONTS (weights must exist on Google Fonts, or the whole import fails).
 *                The "pc" entry is special: its family is the name the user typed.
 *   - a design:  add an entry to DESIGNS; it is merged over BASE_LOOK
 */
(function () {
  "use strict";

  const SANS = '"Yu Gothic UI","Yu Gothic","Meiryo",sans-serif';
  const SERIF = '"Yu Mincho","YuMincho","Hiragino Mincho ProN",serif';

  // Same list as the status bar maker. weights: verified against fonts.googleapis.com/css2 (2026-09-14).
  // null = installed font, no import.
  const FONTS = {
    notosans: { label: "Noto Sans JP", family: "Noto Sans JP", weights: [400, 500, 700, 800, 900], stack: SANS },
    mplus: { label: "M PLUS 1p", family: "M PLUS 1p", weights: [400, 500, 700, 800, 900], stack: SANS },
    mplusround: { label: "M PLUS Rounded 1c（丸）", family: "M PLUS Rounded 1c", weights: [400, 500, 700, 800, 900], stack: SANS },
    zenkaku: { label: "Zen Kaku Gothic New", family: "Zen Kaku Gothic New", weights: [400, 500, 700, 900], stack: SANS },
    zenmaru: { label: "Zen Maru Gothic（丸）", family: "Zen Maru Gothic", weights: [400, 500, 700, 900], stack: SANS },
    kosugimaru: { label: "Kosugi Maru（丸）", family: "Kosugi Maru", weights: [400], stack: SANS },
    bizud: { label: "BIZ UDPゴシック", family: "BIZ UDPGothic", weights: [400, 700], stack: SANS },
    murecho: { label: "Murecho", family: "Murecho", weights: [400, 500, 700, 800, 900], stack: SANS },
    delagothic: { label: "Dela Gothic One（極太）", family: "Dela Gothic One", weights: [400], stack: SANS },
    mochiypop: { label: "Mochiy Pop One（ポップ）", family: "Mochiy Pop One", weights: [400], stack: SANS },
    dotgothic: { label: "DotGothic16（ドット）", family: "DotGothic16", weights: [400], stack: SANS },
    reggae: { label: "Reggae One", family: "Reggae One", weights: [400], stack: SANS },
    kiwimaru: { label: "Kiwi Maru", family: "Kiwi Maru", weights: [400, 500], stack: SANS },
    hachimaru: { label: "Hachi Maru Pop（手書き）", family: "Hachi Maru Pop", weights: [400], stack: SANS },
    klee: { label: "Klee One（教科書体）", family: "Klee One", weights: [400, 600], stack: SANS },
    notoserif: { label: "Noto Serif JP（明朝）", family: "Noto Serif JP", weights: [400, 500, 700, 800, 900], stack: SERIF },
    shippori: { label: "しっぽり明朝 B1", family: "Shippori Mincho B1", weights: [400, 500, 600, 700, 800], stack: SERIF },
    zenold: { label: "Zen Old Mincho（古風）", family: "Zen Old Mincho", weights: [400, 500, 600, 700, 900], stack: SERIF },
    kaisei: { label: "Kaisei Decol", family: "Kaisei Decol", weights: [400, 500, 700], stack: SERIF },
    yujisyuku: { label: "Yuji Syuku（筆）", family: "Yuji Syuku", weights: [400], stack: SERIF },
    yujiboku: { label: "Yuji Boku（筆）", family: "Yuji Boku", weights: [400], stack: SERIF },
    zenantique: { label: "Zen Antique（活版）", family: "Zen Antique", weights: [400], stack: SERIF },
    kurenaido: { label: "Zen Kurenaido", family: "Zen Kurenaido", weights: [400], stack: SANS },
    orbitron: { label: "Orbitron（英数・SF）", family: "Orbitron", weights: [400, 500, 700, 800, 900], stack: SANS },
    rajdhani: { label: "Rajdhani（英数・細身）", family: "Rajdhani", weights: [400, 500, 600, 700], stack: SANS },
    oswald: { label: "Oswald（英数・縦長）", family: "Oswald", weights: [400, 500, 600, 700], stack: SANS },
    sharetech: { label: "Share Tech Mono（英数・等幅）", family: "Share Tech Mono", weights: [400], stack: SANS },
    chakra: { label: "Chakra Petch（英数・角）", family: "Chakra Petch", weights: [400, 500, 600, 700], stack: SANS },
    teko: { label: "Teko（英数・縦長）", family: "Teko", weights: [400, 500, 600, 700], stack: SANS },
    bebas: { label: "Bebas Neue（英数・見出し）", family: "Bebas Neue", weights: [400], stack: SANS },
    russo: { label: "Russo One（英数・太）", family: "Russo One", weights: [400], stack: SANS },
    pressstart: { label: "Press Start 2P（英数・ドット）", family: "Press Start 2P", weights: [400], stack: SANS },
    silkscreen: { label: "Silkscreen（英数・ドット）", family: "Silkscreen", weights: [400, 700], stack: SANS },
    vt323: { label: "VT323（英数・端末）", family: "VT323", weights: [400], stack: SANS },
    cinzel: { label: "Cinzel（英数・碑文）", family: "Cinzel", weights: [400, 500, 600, 700, 800, 900], stack: SERIF },
    cormorant: { label: "Cormorant Garamond（英数・古典）", family: "Cormorant Garamond", weights: [400, 500, 600, 700], stack: SERIF },
    barlowcond: { label: "Barlow Condensed（英数・細身）", family: "Barlow Condensed", weights: [400, 500, 600, 700, 800, 900], stack: SANS },
    yugothic: { label: "游ゴシック（PCのフォント）", family: "Yu Gothic UI", weights: null, stack: SANS },
    meiryo: { label: "メイリオ（PCのフォント）", family: "Meiryo", weights: null, stack: SANS },
    yumincho: { label: "游明朝（PCのフォント）", family: "Yu Mincho", weights: null, stack: SERIF },
    // family comes from the typed name (name.fontName etc.)
    pc: { label: "名前で指定（PCのフォント）", family: "", weights: null, stack: SANS },
  };

  const WEIGHTS = [[400, "標準"], [500, "やや太"], [600, "中太"], [700, "太"], [800, "極太"], [900, "最太"]];

  const ALIGNS = [["center", "中央"], ["left", "左に寄せる"], ["right", "右に寄せる"]];
  const TEXTURES = [["none", "なし"], ["paper", "古い紙"], ["grain", "ざらつき"], ["scanlines", "走査線"], ["gradient", "下に向かって濃く"]];
  const NAME_STYLES = [["inline", "箱の中（見出しの行）"], ["plate", "箱の上に札を付ける"]];
  const OUTLINES = [["shadow", "ぼかした影"], ["stroke", "ふちどり"], ["glow", "光る"], ["none", "なし"]];
  const RESULT_PLACES = [["name", "名前の後ろ"], ["right", "右端"]];
  const RESULT_STYLES = [["text", "文字だけ"], ["badge", "枠で囲む"], ["fill", "色の帯"]];
  const SIDES = [["left", "左"], ["right", "右"]];
  const LAYERS = [["back", "箱の後ろ"], ["front", "箱の前"]];
  const ENTERS = [["slide", "下から滑り出る（ココフォリアのまま）"], ["none", "その場にパッと出る"]];
  const BUTTONS = [["hover", "OBS の「対話」でマウスを乗せたときだけ"], ["hide", "出さない"], ["show", "いつも出す"]];

  // Dice result colors are emotion classes: css-<hash of the Typography styles>. The result in the
  // message box is Typography body2 with color primary / secondary / textSecondary, the same styles
  // as the chat log's result, so the same classes (see chat-window-maker's presets.v1.js).
  //   body2 + primary.main #2196f3   -> success (成功 / スペシャル)
  //   body2 + secondary.main #dc004e -> failure (失敗)
  //   body2 + text.secondary         -> anything else
  const RESULT_CLASS = { success: "css-1l6qhgm", failure: "css-1j13mke", neutral: "css-ucj12" };

  // The look of the default design. Other designs are patches over this.
  const BASE_LOOK = {
    // Where the box sits in the browser source. width: the box's max width.
    layout: { width: 760, align: "center", bottom: 16, side: 16, enter: "slide" },
    box: { bg: "#161616", bgAlpha: 0.86, borderW: 0, borderColor: "#ffffff", borderAlpha: 0.2, radius: 6, shadow: 0.4,
      texture: "none", corners: false, cornerColor: "#ffffff", cornerAlpha: 0.8, padX: 24, padY: 12, lines: 3, buttons: "hover" },
    name: { show: true, style: "inline", font: "notosans", fontName: "", weight: 700, size: 15, color: "#f5f5f5",
      plateBg: "#000000", plateAlpha: 0.8, plateRadius: 4, plateX: 16, plateBorderW: 0, plateBorderColor: "#ffffff", gap: 4 },
    result: { show: true, place: "name", style: "text", font: "notosans", fontName: "", weight: 700, size: 15,
      success: "#5cc8ff", failure: "#ff5c7a", neutral: "#c8c8c8" },
    text: { font: "notosans", fontName: "", weight: 400, size: 17, color: "#f5f5f5", lineHeight: 1.6, spacing: 0.02,
      outline: "none", outlineColor: "#000000", outlineAlpha: 0.8, outlineW: 2 },
    portrait: { show: true, width: 240, maxH: 480, side: "left", x: 8, y: 0, flip: false, layer: "back" },
    dice: { show: true, size: 64 },
  };
  const LOOK_KEYS = Object.keys(BASE_LOOK);

  const DESIGNS = {
    standard: {
      label: "ココフォリア風（標準）", desc: "ココフォリアの見た目に近い、暗い半透明の箱。スキップ・閉じるのボタンは、OBS の「対話」でマウスを乗せたときだけ出ます。",
    },
    novel: {
      label: "ノベルゲーム", desc: "横長の窓の上に名前の札。下に向かって濃くなる背景で、立ち絵を大きく出します。",
      layout: { width: 1100, bottom: 20 },
      box: { bg: "#0b0d18", bgAlpha: 0.78, borderW: 1, borderColor: "#ffffff", borderAlpha: 0.35, radius: 10, texture: "gradient", padX: 36, padY: 18, lines: 3 },
      name: { style: "plate", font: "mplusround", weight: 800, size: 18, plateBg: "#2b3a78", plateAlpha: 0.95, plateRadius: 8, plateX: 28,
        plateBorderW: 1, plateBorderColor: "#ffffff" },
      result: { font: "mplusround", size: 17, place: "right", style: "fill" },
      text: { font: "mplusround", weight: 500, size: 21, lineHeight: 1.65, outline: "shadow", outlineAlpha: 0.7 },
      portrait: { width: 300, maxH: 540, x: 24, y: 24 },
    },
    letter: {
      label: "古い紙（手紙）", desc: "生成りの紙に明朝体。名前は墨色の札。探索ものや、日記・手紙を読み上げる場面に。",
      layout: { width: 820 },
      box: { bg: "#efe4cb", bgAlpha: 0.97, borderW: 1, borderColor: "#6b5130", borderAlpha: 0.7, radius: 3, shadow: 0.5, texture: "paper", padX: 30, padY: 16 },
      name: { style: "plate", font: "shippori", weight: 800, size: 16, color: "#f3ead6", plateBg: "#3a2a1a", plateAlpha: 0.95, plateRadius: 2, plateX: 22 },
      result: { font: "shippori", size: 16, style: "fill", success: "#2c5d9e", failure: "#a02828", neutral: "#6b5130" },
      text: { font: "shippori", weight: 500, size: 18, color: "#2e2116", lineHeight: 1.8 },
    },
    hud: {
      label: "SF 通信", desc: "暗い画面に水色の線と走査線、四隅のかっこ。名前は英数の角ばった書体で。",
      layout: { width: 860 },
      box: { bg: "#03101a", bgAlpha: 0.88, borderW: 1, borderColor: "#6ff3ff", borderAlpha: 0.55, radius: 0, shadow: 0, texture: "scanlines",
        corners: true, cornerColor: "#6ff3ff", cornerAlpha: 0.95, padX: 26 },
      name: { font: "chakra", weight: 700, size: 16, color: "#6ff3ff" },
      result: { font: "rajdhani", size: 19, place: "right", success: "#63ffa8", failure: "#ff5a78", neutral: "#dffbff" },
      text: { font: "zenkaku", weight: 500, size: 17, color: "#dffbff", outline: "glow", outlineColor: "#00c8ff", outlineAlpha: 0.35 },
      portrait: { side: "right", x: 16 },
    },
    horror: {
      label: "ホラー", desc: "黒ずんだ赤と筆文字。ざらついた黒い箱に、名前が赤黒い札で付きます。",
      box: { bg: "#050203", bgAlpha: 0.88, borderW: 1, borderColor: "#6a0f0f", borderAlpha: 0.8, radius: 2, shadow: 0.6, texture: "grain", padX: 28 },
      name: { style: "plate", font: "yujiboku", weight: 400, size: 17, color: "#e8d6d0", plateBg: "#3a0707", plateAlpha: 0.95, plateRadius: 0, plateX: 20,
        plateBorderW: 1, plateBorderColor: "#8a1a1a" },
      result: { font: "zenantique", size: 17, success: "#d8d0c0", failure: "#ff2a2a", neutral: "#c9b3ad" },
      text: { font: "zenantique", size: 18, color: "#eadad6", lineHeight: 1.7, outline: "glow", outlineColor: "#4a0000", outlineAlpha: 1 },
    },
    rpg: {
      label: "RPG のメッセージ窓", desc: "黒い窓に白い太枠、ドット文字。昔のゲームの会話ウィンドウ風。",
      layout: { width: 820, bottom: 24 },
      box: { bg: "#000000", bgAlpha: 0.92, borderW: 4, borderColor: "#ffffff", borderAlpha: 1, radius: 8, shadow: 0, padX: 26, padY: 14 },
      name: { font: "dotgothic", weight: 400, size: 18, color: "#ffe066" },
      result: { font: "dotgothic", weight: 400, size: 18, success: "#6fd3ff", failure: "#ff6b6b", neutral: "#ffffff" },
      text: { font: "dotgothic", weight: 400, size: 20, color: "#ffffff", lineHeight: 1.6, spacing: 0.04 },
      dice: { size: 56 },
    },
    pop: {
      label: "やわらかい吹き出し", desc: "白くて丸い箱に丸ゴシック。名前はピンクの札。日常ものやコメディの卓に。",
      layout: { width: 760 },
      box: { bg: "#ffffff", bgAlpha: 0.96, borderW: 3, borderColor: "#ff8fb1", borderAlpha: 1, radius: 22, shadow: 0.3, padX: 28, padY: 14 },
      name: { style: "plate", font: "zenmaru", weight: 700, size: 16, color: "#ffffff", plateBg: "#ff6f9c", plateAlpha: 1, plateRadius: 14, plateX: 26 },
      result: { font: "zenmaru", size: 16, style: "fill", success: "#2f8fe0", failure: "#e0456a", neutral: "#8a8490" },
      text: { font: "zenmaru", weight: 500, size: 18, color: "#3a3440" },
    },
  };

  // ---------------------------------------------------------------- sample messages (preview only)

  // Colors feed the sample portraits drawn in mock.v1.js. portrait: false = "発言時キャラクターを表示しない".
  const SPEAKERS = {
    kp: { name: "KP", hair: "#2c2a30", cloth: "#4a4658", skin: "#ecdfcc", portrait: false },
    hinata: { name: "朝霧 ひなた", hair: "#8a5a3a", cloth: "#b8433f", skin: "#f3dfc8" },
    ren: { name: "黒崎 蓮", hair: "#1e2433", cloth: "#2f4f7a", skin: "#ead8c2" },
    shizuku: { name: "白瀬 しずく", hair: "#d8d4e8", cloth: "#5f4a8a", skin: "#f5e6da" },
  };

  // result: the dice bot's text; CCFOLIA shows its last "＞ …" part. dice: [faces, value] images.
  const EXTRA_MESSAGES = {
    chat: [
      { who: "hinata", text: "玄関の扉、少しだけ開いてませんか……？" },
      { who: "ren", text: "慎重に進もう。明かりはまだ持ってる。" },
      { who: "shizuku", text: "今の音、上の階から聞こえませんでした？" },
    ],
    success: [
      { who: "hinata", text: "CC<=65 【目星】", result: "(1D100<=65) ＞ 23 ＞ 成功", dice: [[100, 23]] },
      { who: "ren", text: "CC<=70 【図書館】", result: "(1D100<=70) ＞ 1 ＞ 決定的成功/スペシャル", dice: [[100, 1]] },
    ],
    failure: [
      { who: "ren", text: "CC<=40 【聞き耳】", result: "(1D100<=40) ＞ 88 ＞ 失敗", dice: [[100, 88]] },
      { who: "shizuku", text: "CCB<=30 【オカルト】", result: "(1D100<=30) ＞ 98 ＞ 致命的失敗", dice: [[100, 98]] },
    ],
    neutral: [
      { who: "ren", text: "2D6 【ダメージ】", result: "(2D6) ＞ 9[4,5] ＞ 9", dice: [[6, 4], [6, 5]] },
      { who: "kp", text: "1D3 【SAN減少】", result: "(1D3) ＞ 2", dice: [] },
    ],
    // CCFOLIA replaces the text with "シークレットダイス" and shows no dice images and no result.
    secret: [
      { who: "shizuku", text: "S1D100<=50 【心理学】", secret: true },
    ],
    // KP narration: no portrait, and longer than the box.
    long: [
      { who: "kp", text: "門をくぐると、雨に濡れた洋館が目の前に建っている。\n窓はどれも暗く、玄関の扉だけが、まるで誰かを待っていたかのように少しだけ開いている。\n扉の隙間からは、古い紙と黴の匂いが流れてくる。" },
      { who: "kp", text: "（手紙）この手紙を読んでいるということは、あなたはもう地下室の扉を開けたのでしょう。どうか、灯りを消さないでください。あの部屋にいるものは、暗がりの中でしか動けません。" },
    ],
  };

  // The first message the preview shows.
  const FIRST_MESSAGE = { who: "hinata", text: "ここが噂の洋館……。思っていたより、ずっと大きいね。" };

  window.MboxPresets = {
    FONTS, WEIGHTS, ALIGNS, TEXTURES, NAME_STYLES, OUTLINES, RESULT_PLACES, RESULT_STYLES, SIDES, LAYERS, ENTERS, BUTTONS,
    RESULT_CLASS, BASE_LOOK, LOOK_KEYS, DESIGNS, SPEAKERS, EXTRA_MESSAGES, FIRST_MESSAGE,
  };
})();
