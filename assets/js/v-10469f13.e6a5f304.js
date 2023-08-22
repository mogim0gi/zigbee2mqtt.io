"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47001],{215415:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a=JSON.parse('{"key":"v-10469f13","path":"/devices/QT06_1.html","title":"GiEX QT06_1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"GiEX QT06_1 control via MQTT","description":"Integrate your GiEX QT06_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-30T17:14:41.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Cycle_irrigation_num_times (numeric)","slug":"cycle-irrigation-num-times-numeric","link":"#cycle-irrigation-num-times-numeric","children":[]},{"level":3,"title":"Irrigation_start_time (numeric)","slug":"irrigation-start-time-numeric","link":"#irrigation-start-time-numeric","children":[]},{"level":3,"title":"Irrigation_end_time (numeric)","slug":"irrigation-end-time-numeric","link":"#irrigation-end-time-numeric","children":[]},{"level":3,"title":"Last_irrigation_duration (numeric)","slug":"last-irrigation-duration-numeric","link":"#last-irrigation-duration-numeric","children":[]},{"level":3,"title":"Water_consumed (numeric)","slug":"water-consumed-numeric","link":"#water-consumed-numeric","children":[]},{"level":3,"title":"Irrigation_target (numeric)","slug":"irrigation-target-numeric","link":"#irrigation-target-numeric","children":[]},{"level":3,"title":"Cycle_irrigation_interval (numeric)","slug":"cycle-irrigation-interval-numeric","link":"#cycle-irrigation-interval-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1692682800000},"filePathRelative":"devices/QT06_1.md"}')},479653:(e,i,t)=>{t.r(i),t.d(i,{default:()=>m});var a=t(166252);const r=(0,a._)("h1",{id:"giex-qt06-1",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#giex-qt06-1","aria-hidden":"true"},"#"),(0,a.Uk)(" GiEX QT06_1")],-1),o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"QT06_1")],-1),d=(0,a._)("td",null,"Vendor",-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Water irrigation valve")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, state, mode, cycle_irrigation_num_times, irrigation_start_time, irrigation_end_time, last_irrigation_duration, water_consumed, irrigation_target, cycle_irrigation_interval, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/QT06_1.jpg",alt:"GiEX QT06_1"})])],-1),u=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary" aria-hidden="true">#</a> State (binary)</h3><p>State. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Irrigation mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>duration</code>, <code>capacity</code>.</p><h3 id="cycle-irrigation-num-times-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-num-times-numeric" aria-hidden="true">#</a> Cycle_irrigation_num_times (numeric)</h3><p>Number of cycle irrigation times, set to 0 for single cycle. Value can be found in the published state on the <code>cycle_irrigation_num_times</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_num_times&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="irrigation-start-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-start-time-numeric" aria-hidden="true">#</a> Irrigation_start_time (numeric)</h3><p>Last irrigation start time. Value can be found in the published state on the <code>irrigation_start_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="irrigation-end-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-end-time-numeric" aria-hidden="true">#</a> Irrigation_end_time (numeric)</h3><p>Last irrigation end time. Value can be found in the published state on the <code>irrigation_end_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="last-irrigation-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-irrigation-duration-numeric" aria-hidden="true">#</a> Last_irrigation_duration (numeric)</h3><p>Last irrigation duration. Value can be found in the published state on the <code>last_irrigation_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="water-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#water-consumed-numeric" aria-hidden="true">#</a> Water_consumed (numeric)</h3><p>Last irrigation water consumption. Value can be found in the published state on the <code>water_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id="irrigation-target-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-target-numeric" aria-hidden="true">#</a> Irrigation_target (numeric)</h3><p>Irrigation target, duration in minutes or capacity in litres (depending on mode). Value can be found in the published state on the <code>irrigation_target</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;irrigation_target&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>. The unit of this value is <code>minutes or litres</code>.</p><h3 id="cycle-irrigation-interval-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-interval-numeric" aria-hidden="true">#</a> Cycle_irrigation_interval (numeric)</h3><p>Cycle irrigation interval. Value can be found in the published state on the <code>cycle_irrigation_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1440</code>. The unit of this value is <code>min</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),h={},m=(0,t(983744).Z)(h,[["render",function(e,i){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[o,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(t,{to:"/supported-devices/#v=GiEX"},{default:(0,a.w5)((()=>[(0,a.Uk)("GiEX")])),_:1})])]),c,l,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);