/**
 * Akasaka27美容クリニック LP
 * Vanilla JS only.
 * 目的:
 * - モバイルナビゲーションの開閉
 * - スクロール時のヘッダー状態変更
 * - フッター年号の自動更新
 */

(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const yearTarget = document.querySelector("[data-year]");

  /**
   * ヘッダーに影を付けるかどうかをスクロール位置で切り替えます。
   * CSS側で見た目を管理し、JSは状態クラスだけを担当します。
   */
  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  /**
   * モバイルメニューの開閉。
   * aria-expandedも同時に更新して、スクリーンリーダーでも状態が伝わるようにします。
   */
  const setNavOpen = (isOpen) => {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setNavOpen(!isOpen);
    });
  }

  if (nav) {
    nav.addEventListener("click", (event) => {
      const clickedLink = event.target.closest("a");
      if (clickedLink) {
        setNavOpen(false);
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setNavOpen(false);
    }
  });

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  updateHeaderState();
})();
