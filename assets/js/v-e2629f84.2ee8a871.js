"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96475],{166377:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-e2629f84","path":"/devices/TS0601_din.html","title":"TuYa TS0601_din control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_din control via MQTT","description":"Integrate your TuYa TS0601_din via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-01T14:47:09.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Manual toggle","slug":"manual-toggle","link":"#manual-toggle","children":[]},{"level":3,"title":"State updates","slug":"state-updates","link":"#state-updates","children":[]},{"level":3,"title":"Energy value","slug":"energy-value","link":"#energy-value","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1692682800000},"filePathRelative":"devices/TS0601_din.md"}')},237394:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(166252);const a=(0,n._)("h1",{id:"tuya-ts0601-din",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#tuya-ts0601-din","aria-hidden":"true"},"#"),(0,n.Uk)(" TuYa TS0601_din")],-1),o=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"TS0601_din")],-1),l=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee smart energy meter DDS238-2 Zigbee")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"switch (state), voltage, power, current, energy, linkquality")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_din.jpg",alt:"TuYa TS0601_din"})])],-1),c=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>In order to enter pairing mode, hold the button until you see &quot;--Init-&quot; on the screen.</p><h3 id="manual-toggle" tabindex="-1"><a class="header-anchor" href="#manual-toggle" aria-hidden="true">#</a> Manual toggle</h3><p>In order to toggle the relay manually do a triple press on the button.</p><h3 id="state-updates" tabindex="-1"><a class="header-anchor" href="#state-updates" aria-hidden="true">#</a> State updates</h3><p>As it is mentioned below in the &quot;Exposes&quot; section there is no way to read (<code>/get</code>) exposed values. The device broadcasts them itself at a fixed rate, once every 30 seconds. And the value sent is exactly the number at the moment of sending. Therefore sometimes it may lead to unreliable readings of the values like Current. E.g. in case the load connected to the relay is consuming current for 15 seconds and then sits idle (no power consumption) for another 15 seconds, then it is possible that the relay will be sending Current value as zero.</p><p>The only value that is reliable enough is Energy since it is calculated and stored incrementally.</p><h3 id="energy-value" tabindex="-1"><a class="header-anchor" href="#energy-value" aria-hidden="true">#</a> Energy value</h3><p>This value shows <code>null</code> until meter measures some about 0.2 amount of kWh consumed.</p>',10),h=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),p={},g=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[o,(0,n._)("tbody",null,[r,(0,n._)("tr",null,[l,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,n.w5)((()=>[(0,n.Uk)("TuYa")])),_:1})])]),d,s,u])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,n.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);