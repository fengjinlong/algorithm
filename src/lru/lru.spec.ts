import { describe, expect, it } from "vitest";
import { LRUCache } from "./lru";
describe("lru", () => {
  it("size", () => {
    let lru = new LRUCache(5);
    expect(lru.cache.size).toBe(0);
    lru.put("a", "a");
    expect(lru.cache.size).toBe(1);
  });
  it("tostring", () => {
    let lru = new LRUCache(5);
    lru.put("a", "a");
    lru.put("b", "b");
    expect(lru.tostring()).toBe("ab");
  });
  it("get", () => {
    let lru = new LRUCache(5);
    lru.put("a", "a");
    lru.put("b", "b");
    lru.put("c", "c");
    lru.put("d", "d");
    expect(lru.tostring()).toBe("abcd");
    lru.get("a");
    expect(lru.tostring()).toBe("bcda");
    lru.get("b");
    lru.get("a");
    expect(lru.tostring()).toBe("cdba");
  });

  it("over get", () => {
    let lru = new LRUCache(3);
    lru.put("a", "a");
    lru.put("b", "b");
    lru.put("c", "c");
    expect(lru.tostring()).toBe("abc");
    lru.put("d", "d");
    expect(lru.tostring()).toBe("bcd");
    lru.get("c");
    expect(lru.tostring()).toBe("bdc");
  });
});
