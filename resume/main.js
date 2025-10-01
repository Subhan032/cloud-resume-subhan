// main.js
async function loadCounter() {
  const counterEl = document.getElementById('counter');
  counterEl.textContent = 'loading...';

  try {
    // We'll replace this URL with API Gateway endpoint once deployed
    const resp = await fetch('/api/visitor', { method: 'GET' });
    if (!resp.ok) throw new Error('no counter');
    const data = await resp.json();
    counterEl.textContent = data.count ?? '—';
  } catch (err) {
    // graceful fallback for now
    counterEl.textContent = '0';
    console.log('counter fetch failed (expected before backend):', err);
  }
}

window.addEventListener('load', loadCounter);
