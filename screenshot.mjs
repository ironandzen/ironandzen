import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });

// Desktop
const desk = await browser.newPage();
await desk.setViewportSize({ width: 1440, height: 900 });
await desk.goto('http://localhost:4321');
await desk.waitForLoadState('networkidle');

// Day cards (Stillness fix)
await desk.evaluate(() => window.scrollTo(0, 1695));
await desk.waitForTimeout(200);
await desk.screenshot({ path: 'C:/Users/Edgar/AppData/Local/Temp/claude/v_day_cards.png', clip: { x: 0, y: 0, width: 1440, height: 758 } });

// Film section (wider text fix)
await desk.evaluate(() => window.scrollTo(0, 2452));
await desk.waitForTimeout(200);
await desk.screenshot({ path: 'C:/Users/Edgar/AppData/Local/Temp/claude/v_film.png', clip: { x: 0, y: 0, width: 1440, height: 640 } });

// Activity flow card
await desk.evaluate(() => window.scrollTo(0, 3452));
await desk.waitForTimeout(200);
await desk.screenshot({ path: 'C:/Users/Edgar/AppData/Local/Temp/claude/v_flow.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

// Apply form (max-width fix)
await desk.evaluate(() => window.scrollTo(0, 6764));
await desk.waitForTimeout(200);
await desk.screenshot({ path: 'C:/Users/Edgar/AppData/Local/Temp/claude/v_apply.png', clip: { x: 0, y: 0, width: 1440, height: 594 } });

// Mobile - day cards
const mob = await browser.newPage();
await mob.setViewportSize({ width: 390, height: 844 });
await mob.goto('http://localhost:4321');
await mob.waitForLoadState('networkidle');
await mob.evaluate(() => window.scrollTo(0, 1600));
await mob.waitForTimeout(200);
await mob.screenshot({ path: 'C:/Users/Edgar/AppData/Local/Temp/claude/v_mob_cards.png', clip: { x: 0, y: 0, width: 390, height: 844 } });

await browser.close();
console.log('done');
