(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
    const s = document.querySelector(".interactive");
    console.log("Selected .interactive element:", s);
    let r = 0,
        n = 0,
        i = 0,
        e = 0;

    function t() {
        console.log("Inside animation function");
        (r += (i - r) / 20),
        (n += (e - n) / 20),
        (s.style.transform = `translate(${Math.round(r)}px, ${Math.round(n)}px)`),
        requestAnimationFrame(() => {
            t();
        });
    }
    window.addEventListener("mousemove", (o) => {
        console.log("Mousemove event detected");
        (i = o.clientX), (e = o.clientY);
    });
    t();
});



