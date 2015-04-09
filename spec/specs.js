describe('toDecimal', function() {
  it("takes a 0 in binary and returns 0 in decimal", function() {
    expect(toDecimal(0)).to.equal(0);
  });

  it("takes a 1 in binary and returns 1 in decimal", function() {
    expect(toDecimal(1)).to.equal(1);
  });

  it("takes a 10 in binary and returns 2 in decimal", function() {
    expect(toDecimal(10)).to.equal(2);
  });

  it("takes a 11 in binary and returns 3 in decimal", function() {
    expect(toDecimal(11)).to.equal(3);
  });

  it("takes a 100 in binary and returns 4 in decimal", function() {
    expect(toDecimal(100)).to.equal(4);
  });

  it("takes a 10010 in binary and returns 18 in decimal", function() {
    expect(toDecimal(10010)).to.equal(18);
  });

  it("takes a 111011 in binary and returns 59 in decimal", function() {
    expect(toDecimal(111011)).to.equal(59);
  });

});
