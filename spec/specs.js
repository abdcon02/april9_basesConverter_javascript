describe('toDecimal', function() {
  it("takes a 0 in binary and returns 0 in decimal", function() {
    expect(toDecimal(0, 2)).to.equal(0);
  });

  it("takes a 1 in binary and returns 1 in decimal", function() {
    expect(toDecimal(1, 2)).to.equal(1);
  });

  it("takes a 10 in binary and returns 2 in decimal", function() {
    expect(toDecimal(10, 2)).to.equal(2);
  });

  it("takes a 11 in binary and returns 3 in decimal", function() {
    expect(toDecimal(11, 2)).to.equal(3);
  });

  it("takes a 100 in binary and returns 4 in decimal", function() {
    expect(toDecimal(100, 2)).to.equal(4);
  });

  it("takes a 10010 in binary and returns 18 in decimal", function() {
    expect(toDecimal(10010, 2)).to.equal(18);
  });

  it("takes a 111011 in binary and returns 59 in decimal", function() {
    expect(toDecimal(111011, 2)).to.equal(59);
  });

  it("takes a 0 in binary and returns 0 in decimal", function() {
    expect(toDecimal(0, 2)).to.equal(0);
  });

  it("takes a 0 in trinary and returns 0 in decimal", function() {
    expect(toDecimal(0, 3)).to.equal(0);
  });

  it("takes a 10 in trinary and returns 3 in decimal", function() {
    expect(toDecimal(10, 3)).to.equal(3);
  });

  it("takes a 101 in trinary and returns 10 in decimal", function() {
    expect(toDecimal(101, 3)).to.equal(10);
  });

  it("takes a 120 in trinary and returns 15 in decimal", function() {
    expect(toDecimal(120, 3)).to.equal(15);
  });

  it("takes a 112 in trinary and returns 14 in decimal", function() {
    expect(toDecimal(112, 3)).to.equal(14);
  });

  it("takes a 12212 in trinary and returns 158 in decimal", function() {
    expect(toDecimal(12212, 3)).to.equal(158);
  });


});
