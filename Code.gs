
<!DOCTYPE html>
<html>
<head>
<base target="_top">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
:root{--red:#f04452;--bg:#0b0d12;--panel:#13161e;--line:#292e39;--muted:#9ba3b2}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:#f5f6fa;font:14px Arial,sans-serif}
button,input,textarea{font:inherit}
button{cursor:pointer}
button:focus-visible,input:focus-visible,textarea:focus-visible{outline:2px solid var(--red);outline-offset:2px}
.hidden{display:none!important}
.top{height:60px;padding:0 22px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #252a34;background:#0e1016}
.logo{font-size:12px;font-weight:bold;letter-spacing:2px}
.logo span{color:var(--red)}
.topright{display:flex;align-items:center;gap:10px}
.status{font-size:10px;letter-spacing:1px;color:#ff8791;padding:9px 11px;border:1px solid #49252d;border-radius:5px}
button{border-radius:6px;padding:11px 14px;border:1px solid #363c48;background:#191d26;color:#f5f6fa;font-size:11px;font-weight:bold;letter-spacing:.5px}
button:hover{border-color:#717987}
.staff{border-color:#77303a;color:#ff929c;background:#211218}
.primary{background:#d92d40;border-color:#f04452;color:white}
.primary:hover{background:#ed3549}
.scene{min-height:calc(100vh - 60px);display:flex;align-items:center;justify-content:center;padding:35px 18px;background:radial-gradient(ellipse at 50% 30%,#25212a 0%,#12141b 48%,#0b0d12 100%)}
.content{width:min(540px,100%);text-align:center}
.eyebrow{font-size:10px;letter-spacing:4px;color:#a7acb8;margin-bottom:25px}
.signal{color:var(--red);font-size:25px;margin-bottom:12px}
h1{font-size:clamp(44px,8vw,65px);letter-spacing:3px;color:var(--red);margin:0}
.desc{font-size:14px;line-height:1.8;color:#b9bfca;margin:15px 0 28px}
.timer{font-size:11px;letter-spacing:1px;color:#c2c6cf;margin-bottom:20px}
.actions{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.action{padding:15px;background:#141720;border:1px solid #292e39;border-radius:9px}
.action button{width:100%;min-height:48px}
.hint{font-size:11px;line-height:1.5;color:#8e96a5;margin-top:11px}
.message{color:#ff8b95;font-size:12px;line-height:1.6;margin-top:17px;overflow-wrap:anywhere}
.alive h1{font-size:clamp(32px,6vw,46px);color:#f5f6fa}
.alive .signal{color:#70dca0}
.alive-card{margin-top:24px;padding:25px;background:#141720;border:1px solid #292e39;border-radius:10px}
.alive-card p{color:#b9bfca;line-height:1.8}
.alive-card button{margin-top:12px;width:100%}
.footer{position:fixed;bottom:12px;left:0;right:0;text-align:center;font-size:10px;color:#626a78;letter-spacing:1px;pointer-events:none}

/* Staff windows */
.overlay{position:fixed;inset:0;z-index:10;background:#050609eF;display:flex;align-items:center;justify-content:center;padding:15px}
.dialog{width:min(410px,100%);background:#12151c;border:1px solid #333946;border-radius:10px;padding:23px}
.dialoghead{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:15px}
h2{font-size:19px;margin:0}
.sub{color:var(--muted);font-size:12px;line-height:1.7}
.close{width:34px;height:34px;padding:0;font-size:17px}
.field{width:100%;padding:13px;background:#090b10;color:white;border:1px solid #343a47;border-radius:6px;margin:14px 0 9px}
.error{min-height:19px;color:#ff7885;font-size:12px;margin-bottom:8px}
.full{width:100%}
.panel{width:min(850px,100%);max-height:88vh;overflow:auto;background:#0e1117;border:1px solid #303642;border-radius:10px}
.panelhead{padding:20px 22px;display:flex;justify-content:space-between;align-items:center;gap:12px;border-bottom:1px solid #282e38}
.kicker{font-size:10px;color:#ff7785;letter-spacing:2px}
.paneltitle{font-size:22px;font-weight:bold;margin-top:8px}
.panelbody{padding:20px}
.tabs{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:20px}
.tab{color:#aeb5c2;background:#171b24}
.tab.active{color:#ff8b96;background:#30151c;border-color:#78313c}
.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.card{padding:17px;background:#151922;border:1px solid #292f3b;border-radius:7px;min-width:0}
.label{font-size:10px;color:#a0a8b7;letter-spacing:1px}
.value{font-size:23px;font-weight:bold;margin-top:12px;overflow-wrap:anywhere}
.small{font-size:11px;color:#858e9e;margin-top:7px;line-height:1.6}
.sectiontitle{font-size:13px;font-weight:bold;margin:23px 0 10px}
.rowbox{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px;margin-top:8px;background:#151922;border:1px solid #292f3b;border-radius:7px}
.rowbox strong{font-size:12px}
.rowbox p{font-size:11px;line-height:1.6;color:#929bab;margin:5px 0 0}
.smallbtn{flex-shrink:0;color:#ff8b96;background:#24151b;border-color:#66303a}
textarea.field{min-height:90px;resize:vertical}
.panelmsg{color:#81dca3;font-size:12px;line-height:1.7;margin-top:15px;overflow-wrap:anywhere}
@media(max-width:520px){
 .top{height:56px;padding:0 10px}
 .logo{font-size:10px;letter-spacing:1px}
 .topright{gap:5px}
 .status{font-size:9px;padding:8px 6px}
 .staff{padding:9px 8px;font-size:10px}
 .scene{min-height:calc(100vh - 56px);padding:25px 15px}
 .eyebrow{letter-spacing:3px}
 .actions{grid-template-columns:1fr}
 .action{padding:12px}
 .hint{margin-top:7px}
 .cards{grid-template-columns:1fr}
 .card{padding:13px}
 .panelbody,.panelhead{padding:14px}
 .paneltitle{font-size:18px}
 .rowbox{padding:11px}
 .footer{font-size:9px}
}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
</style>
</head>
<body>
<header class="top">
  <div class="logo">LIBERTY COUNTY <span>RP</span></div>
  <div class="topright">
    <div class="status" id="topStatus">● DOWNED</div>
    <button class="staff" id="staffBtn">STAFF ↗</button>
  </div>
</header>

<main class="scene">
  <section class="content" id="deathScreen">
    <div class="eyebrow">EMERGENCY SERVICES</div>
    <div class="signal">━ ━╱╲━ ━</div>
    <h1>YOU DIED</h1>
    <p class="desc" id="description">You have been killed.<br>What would you like to do?</p>
    <div class="timer" id="timer">RESPAWN AVAILABLE</div>
    <div class="actions">
      <div class="action">
        <button class="primary" id="respawnBtn">↻ &nbsp; RESPAWN</button>
        <div class="hint">Return to the spawn point</div>
      </div>
      <div class="action">
        <button id="stayBtn">Ⅱ &nbsp; STAY</button>
        <div class="hint">Wait at the scene</div>
      </div>
    </div>
    <div class="message" id="message" aria-live="polite"></div>
  </section>

  <section class="content alive hidden" id="aliveScreen">
    <div class="signal">✓</div>
    <h1>WELCOME BACK</h1>
    <p class="desc">You have returned to the county spawn point.</p>
    <div class="alive-card">
      <p>Your next roleplay story starts here.</p>
      <button class="primary" id="testBtn">TEST DEATH SCREEN</button>
    </div>
  </section>
</main>

<div class="footer">LIBERTY COUNTY ROLEPLAY · UI PROTOTYPE</div>

<div class="overlay hidden" id="loginOverlay" role="dialog" aria-modal="true" aria-labelledby="loginTitle">
  <div class="dialog">
    <div class="dialoghead">
      <h2 id="loginTitle">Staff authentication</h2>
      <button class="close" id="loginClose" aria-label="Close">×</button>
    </div>
    <p class="sub">Enter your staff access code to open the administration panel.</p>
    <form id="loginForm">
      <input class="field" id="staffCode" type="password" inputmode="numeric" autocomplete="off" placeholder="Staff access code" required>
      <div class="error" id="loginError" aria-live="polite"></div>
      <button class="primary full" id="loginSubmit" type="submit">VERIFY ACCESS</button>
    </form>
  </div>
</div>

<div class="overlay hidden" id="adminOverlay" role="dialog" aria-modal="true" aria-labelledby="adminTitle">
  <div class="panel">
    <div class="panelhead">
      <div>
        <div class="kicker">LIBERTY COUNTY RP / STAFF</div>
        <div class="paneltitle" id="adminTitle">Administration panel</div>
      </div>
      <button class="close" id="adminClose" aria-label="Close panel">×</button>
    </div>
    <div class="panelbody">
      <div class="tabs">
        <button class="tab active" data-tab="overview">Overview</button>
        <button class="tab" data-tab="players">Players</button>
        <button class="tab" data-tab="server">Server</button>
      </div>

      <section id="tab-overview">
        <div class="cards">
          <div class="card"><div class="label">STATUS</div><div class="value" style="color:#75dda0">ONLINE</div><div class="small">Local prototype</div></div>
          <div class="card"><div class="label">PLAYERS</div><div class="value">1</div><div class="small">Current browser only</div></div>
          <div class="card"><div class="label">STAFF ACCESS</div><div class="value">ACTIVE</div><div class="small">Verified session</div></div>
        </div>
        <div class="sectiontitle">Quick actions</div>
        <div class="rowbox"><div><strong>Death screen</strong><p>Preview the death interface.</p></div><button class="smallbtn" id="previewDeath">PREVIEW</button></div>
        <div class="rowbox"><div><strong>Respawn</strong><p>Return to the alive screen.</p></div><button class="smallbtn" id="quickRespawn">RESPAWN</button></div>
      </section>

      <section id="tab-players" class="hidden">
        <div class="sectiontitle">Player management</div>
        <div class="rowbox"><div><strong>Prototype Player</strong><p>Local session · No multiplayer connection</p></div><button class="smallbtn" id="playerRespawn">RESPAWN</button></div>
        <div class="rowbox"><div><strong>Revive player</strong><p>Simulate a staff revive action.</p></div><button class="smallbtn" id="playerRevive">REVIVE</button></div>
        <p class="sub">These actions only affect this browser prototype.</p>
      </section>

      <section id="tab-server" class="hidden">
        <div class="sectiontitle">Test announcement</div>
        <p class="sub">Announcements appear only in this browser.</p>
        <textarea class="field" id="announcement" maxlength="250" placeholder="Write an announcement..."></textarea>
        <button class="primary full" id="sendAnnouncement">SEND ANNOUNCEMENT</button>
        <div class="sectiontitle">Session controls</div>
        <div class="rowbox"><div><strong>Close panel</strong><p>Return to the game interface.</p></div><button id="closePanel">CLOSE</button></div>
      </section>
      <div class="panelmsg" id="panelMessage" aria-live="polite"></div>
    </div>
  </div>
</div>

<script>
(function(){
  const $=id=>document.getElementById(id);
  let countdown=null,remaining=30,waiting=false,authenticated=false,pending=false;

  function stopTimer(){
    if(countdown!==null)clearInterval(countdown);
    countdown=null;
  }

  function status(alive){
    $('topStatus').textContent=alive?'● ALIVE':'● DOWNED';
    $('topStatus').style.color=alive?'#75dda0':'#ff8791';
  }

  function showDeath(){
    stopTimer();remaining=30;waiting=false;
    $('deathScreen').classList.remove('hidden');
    $('aliveScreen').classList.add('hidden');
    $('description').innerHTML='You have been killed.<br>What would you like to do?';
    $('timer').textContent='RESPAWN AVAILABLE';
    $('message').textContent='';
    $('stayBtn').textContent='Ⅱ  STAY';
    status(false);
  }

  function respawn(){
    stopTimer();waiting=false;
    $('deathScreen').classList.add('hidden');
    $('aliveScreen').classList.remove('hidden');
    status(true);
    $('panelMessage').textContent='Prototype respawn completed.';
  }

  function stay(){
    if(waiting)return;
    waiting=true;remaining=30;
    $('stayBtn').textContent='WAITING...';
    $('description').innerHTML='You are staying at the scene.<br>Waiting for emergency services...';
    $('message').textContent='Respawn remains available.';
    updateTimer();
    countdown=setInterval(function(){
      remaining--;updateTimer();
      if(remaining<=0){
        stopTimer();waiting=false;
        $('stayBtn').textContent='Ⅱ  STAY';
        $('timer').textContent='SCENE HOLD COMPLETE';
        $('message').textContent='You may respawn or continue waiting.';
      }
    },1000);
  }

  function updateTimer(){
    $('timer').textContent='SCENE HOLD: '+remaining+'s';
  }

  function closeLogin(){
    if(!pending)$('loginOverlay').classList.add('hidden');
  }

  function closeAdmin(){
    $('adminOverlay').classList.add('hidden');
  }

  function tab(name){
    document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
    ['overview','players','server'].forEach(n=>$('tab-'+n).classList.toggle('hidden',n!==name));
    $('panelMessage').textContent='';
  }

  function note(text){$('panelMessage').textContent=text;}

  $('respawnBtn').onclick=respawn;
  $('stayBtn').onclick=stay;
  $('testBtn').onclick=showDeath;

  $('staffBtn').onclick=function(){
    if(authenticated){
      $('adminOverlay').classList.remove('hidden');
      tab('overview');
    }else{
      $('loginError').textContent='';
      $('staffCode').value='';
      $('loginOverlay').classList.remove('hidden');
      $('staffCode').focus();
    }
  };

  $('loginClose').onclick=closeLogin;
  $('adminClose').onclick=closeAdmin;
  $('closePanel').onclick=closeAdmin;
  $('previewDeath').onclick=function(){closeAdmin();showDeath();};
  $('quickRespawn').onclick=function(){closeAdmin();respawn();};
  $('playerRespawn').onclick=function(){closeAdmin();respawn();};
  $('playerRevive').onclick=function(){closeAdmin();respawn();};

  document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>tab(b.dataset.tab));

  $('sendAnnouncement').onclick=function(){
    const text=$('announcement').value.trim();
    note(text?'TEST ANNOUNCEMENT: '+text:'Enter an announcement first.');
  };

  $('loginForm').onsubmit=function(e){
    e.preventDefault();
    if(pending)return;
    pending=true;
    $('loginSubmit').disabled=true;
    $('loginSubmit').textContent='VERIFYING...';
    $('loginError').textContent='';

    google.script.run
      .withSuccessHandler(function(ok){
        pending=false;
        $('loginSubmit').disabled=false;
        $('loginSubmit').textContent='VERIFY ACCESS';
        if(ok){
          authenticated=true;
          $('loginOverlay').classList.add('hidden');
          $('adminOverlay').classList.remove('hidden');
          tab('overview');
          note('Staff panel opened. Prototype mode.');
        }else{
          $('loginError').textContent='Invalid staff code. Access denied.';
          $('staffCode').value='';
          $('staffCode').focus();
        }
      })
      .withFailureHandler(function(){
        pending=false;
        $('loginSubmit').disabled=false;
        $('loginSubmit').textContent='VERIFY ACCESS';
        $('loginError').textContent='Verification failed. Please try again.';
      })
      .verifyStaffCode($('staffCode').value);
  };

  $('loginOverlay').onclick=e=>{if(e.target===$('loginOverlay'))closeLogin();};
  $('adminOverlay').onclick=e=>{if(e.target===$('adminOverlay'))closeAdmin();};
  document.onkeydown=e=>{
    if(e.key==='Escape'){closeLogin();closeAdmin();}
  };
})();
</script>
</body>
</html>
