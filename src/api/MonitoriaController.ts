/* eslint-disable no-use-before-define */

export class MonitoriaController {
  private static monitoriaController: MonitoriaController

  public static getInstance(): MonitoriaController {
    if (this.monitoriaController == null) {
      this.monitoriaController = new MonitoriaController()
    }
    return this.monitoriaController
  }
}
