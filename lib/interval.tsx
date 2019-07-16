class Interval {
  static ids: Array<any> = [];

  set(callback: Function, ms: number): number {
    const interval = setInterval(callback, ms);
    Interval.ids.push(interval);
    return interval;
  }

  clear(id: number) {
    clearInterval(id);
  }

  static clearAll() {
    for(const id of Interval.ids) {
      clearInterval(id);
    }
  }
}

export { Interval };
