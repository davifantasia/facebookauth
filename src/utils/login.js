const delay = (ms) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Simulate server side logout by adding delay
export const logout = () =>
  delay(500).then(() => { return; });
