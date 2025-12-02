export function evaluatePolicyRule(user: any, rule: string): boolean {
    try {
      // Use Function constructor for sandboxed dynamic evaluation
      const fn = new Function("user", `return ${rule};`);
      return fn(user);
    } catch (e) {
      console.error("Policy rule evaluation failed:", e);
      return false;
    }
  }
  