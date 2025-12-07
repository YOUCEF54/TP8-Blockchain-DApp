const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
    // it("should initialize with the correct message", async () => {
    //     const instance = await HelloWorld.deployed();
    //     const message = await instance.message();
    //     assert.equal(message, "Hello, Blockchain!", "Incorrect initial message");
    // });

    // it("should update the message", async () => {
    //     const instance = await HelloWorld.deployed();
    //     await instance.updateMessage("New Message");
    //     const message = await instance.message();
    //     assert.equal(message, "New Message", "Message was not updated");
    // });

    it("Hello World Testing" , async () => {
    const helloWorld = await HelloWorld.deployed() ;
    await helloWorld.setName("User Name") ;
    const result = await helloWorld.yourName() ;
    assert(result === "User Name") ;
    });
});
