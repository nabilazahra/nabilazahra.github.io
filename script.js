/* Renders content.js into the page and runs the two nav toggles.
   You shouldn't need to edit this file to change any text. */
(function(){
  var S = window.SITE;
  if (!S) return;

  var $ = function(id){ return document.getElementById(id); };
  var timeline = $('timeline'), progress = $('progress'), itemsEl = $('items');
  var btnAI = $('toggle-ai'), btnSimple = $('toggle-simple');

  // ?ai and/or ?simple in the URL turn the toggles on, so a filtered view can be shared
  var params = new URLSearchParams(location.search);
  // nav.showSimple: false hides the Simplify button (and ignores ?simple) without removing the feature
  var simpleOn = S.nav.showSimple !== false;
  btnSimple.hidden = !simpleOn;
  var state = { ai: params.has('ai'), simple: simpleOn && params.has('simple') };

  // Use the "simple" version of a field when Simplify is on and one exists
  function pick(obj, key){
    if (state.simple && obj.simple && obj.simple[key] != null) return obj.simple[key];
    return obj[key] == null ? '' : obj[key];
  }

  function itemHTML(x, side){
    var meta = [x.when, x.place].filter(Boolean).join(' · ');
    var html =
      '<section class="item ' + side + '">' +
        '<span class="dot"></span>' +
        '<div class="content">' +
          '<p class="meta"><span class="company">' + x.company + '</span>' + (meta ? ' · ' + meta : '') + '</p>' +
          '<h2>' + pick(x, 'title') + '</h2>';
    [['built', S.labels.built], ['challenges', S.labels.challenges]].forEach(function(b){
      var text = pick(x, b[0]);
      if (text) html += '<div class="block"><h3 class="label">' + b[1] + '</h3><p>' + text + '</p></div>';
    });
    if (x.image){
      html += '<figure><img src="' + x.image + '" alt="' + (x.alt || x.company) + '" loading="lazy">' +
              (x.caption ? '<figcaption>' + x.caption + '</figcaption>' : '') + '</figure>';
    }
    return html + '</div></section>';
  }

  function render(){
    $('hero-name').innerHTML = S.hero.name;
    $('hero-tagline').innerHTML = pick(S.hero, 'tagline');
    $('end-title').innerHTML = pick(S.end, 'title');
    $('end-text').innerHTML = pick(S.end, 'text');
    $('end-links').innerHTML = S.end.links.map(function(l){
      return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
    }).join('');

    btnAI.textContent = S.nav.ai;
    btnSimple.textContent = S.nav.simple;
    btnAI.setAttribute('aria-pressed', state.ai);
    btnSimple.setAttribute('aria-pressed', state.simple);

    var shown = S.experiences.filter(function(x){ return !state.ai || x.ai; });
    itemsEl.innerHTML = shown.map(function(x, i){
      return itemHTML(x, i % 2 ? 'right' : 'left');
    }).join('');

    // Photos that don't exist yet are removed instead of showing a broken image
    Array.prototype.forEach.call(itemsEl.querySelectorAll('figure img'), function(img){
      img.addEventListener('error', function(){ img.parentNode.remove(); update(); });
    });

    var empty = $('empty');
    empty.textContent = S.emptyMessage || '';
    empty.hidden = shown.length > 0;

    $('status').textContent = state.ai
      ? 'Showing ' + shown.length + ' of ' + S.experiences.length + ' experiences'
      : 'Showing all experiences';

    update();
  }

  function syncURL(){
    var q = [];
    if (state.ai) q.push('ai');
    if (state.simple) q.push('simple');
    history.replaceState(null, '', q.length ? '?' + q.join('&') : location.pathname);
  }

  function toggle(key){
    state[key] = !state[key];
    syncURL();
    render();
  }
  btnAI.addEventListener('click', function(){ toggle('ai'); });
  btnSimple.addEventListener('click', function(){ toggle('simple'); });

  // ---------- scroll-linked line ----------
  function update(){
    var box = timeline.getBoundingClientRect();
    var mark = window.innerHeight * 0.6;              // the line keeps up with this point on screen
    var h = Math.min(Math.max(mark - box.top, 0), timeline.offsetHeight - 48);
    progress.style.height = h + 'px';

    Array.prototype.forEach.call(itemsEl.querySelectorAll('.item'), function(it){
      var dot = it.querySelector('.dot');
      var y = it.offsetTop + dot.offsetTop;  // dot position inside the timeline
      it.classList.toggle('passed', y <= h + 4);
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function(){
    if (!ticking){ ticking = true; requestAnimationFrame(function(){ update(); ticking = false; }); }
  }, {passive:true});
  window.addEventListener('resize', update);
  window.addEventListener('load', update);

  render();
})();
