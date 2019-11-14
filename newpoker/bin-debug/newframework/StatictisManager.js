// namespace StatictisManager{
//     export function onNetwork(label:string) {
//             let netStep:number = ali.Player.Instance().GetNetStep();
// 			if (netStep <= 0) {
// 				netStep = PlayerPref.getPrefI(PlayerPref.PLAYER_NETWORK_STEP);
// 			}
// 			if (netStep <= 200 && netStep > 0) {
// 				asStatistic.onEvent(StatictisEvents.T_request+netStep, label, null);
// 				netStep++;
// 				PlayerPref.setPrefI(PlayerPref.PLAYER_NETWORK_STEP, netStep);	
//                 ali.Player.Instance().SetNetStep(netStep);	
// 			}
// 		}
// 	}
//# sourceMappingURL=StatictisManager.js.map