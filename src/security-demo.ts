export function runUnsafeCode(userInput: string) {
  // SECURITY DEMO ONLY:
  // This intentionally uses eval so CodeQL can detect unsafe code execution.
  return eval(userInput);
}