"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:13164387892946093282 LICENSE.md

const {expect} = require('chai')
const LVMPDDeva = require('./index.js');

describe(LVMPDDeva.me.name, () => {
  beforeEach(() => {
    return LVMPDDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(LVMPDDeva).to.be.an('object');
    expect(LVMPDDeva).to.have.property('agent');
    expect(LVMPDDeva).to.have.property('vars');
    expect(LVMPDDeva).to.have.property('listeners');
    expect(LVMPDDeva).to.have.property('methods');
    expect(LVMPDDeva).to.have.property('modules');
  });
})
