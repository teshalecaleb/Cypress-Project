function cov_1u7ebbn894() {
  var path = "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\TransactionsHistory.spec.js";
  var hash = "afe63b2b0b1cbd1ae1cbae34daa54b08061a33c2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\TransactionsHistory.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 16
        }
      },
      "2": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "4": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 76
        }
      },
      "5": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 72
        }
      },
      "6": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 61
        }
      },
      "7": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 30
        }
      },
      "8": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 89
        }
      },
      "9": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "10": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 76
        }
      },
      "11": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 72
        }
      },
      "12": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 61
        }
      },
      "13": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 30
        }
      },
      "14": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 89
        }
      },
      "15": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 73
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 8,
            column: 34
          }
        },
        loc: {
          start: {
            line: 8,
            column: 52
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 13,
            column: 66
          },
          end: {
            line: 13,
            column: 67
          }
        },
        loc: {
          start: {
            line: 13,
            column: 72
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 13
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 50
          },
          end: {
            line: 14,
            column: 51
          }
        },
        loc: {
          start: {
            line: 14,
            column: 56
          },
          end: {
            line: 21,
            column: 7
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 55
          },
          end: {
            line: 22,
            column: 56
          }
        },
        loc: {
          start: {
            line: 22,
            column: 61
          },
          end: {
            line: 30,
            column: 7
          }
        },
        line: 22
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "afe63b2b0b1cbd1ae1cbae34daa54b08061a33c2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1u7ebbn894 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1u7ebbn894();
cov_1u7ebbn894().s[0]++;
// TransactionsHistory.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  cov_1u7ebbn894().f[0]++;
  cov_1u7ebbn894().s[1]++;
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
cov_1u7ebbn894().s[2]++;
describe('Addis Event Arranger TransactionHistory page test', () => {
  cov_1u7ebbn894().f[1]++;
  cov_1u7ebbn894().s[3]++;
  it('TransactionHistory page is displayed', () => {
    cov_1u7ebbn894().f[2]++;
    cov_1u7ebbn894().s[4]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_1u7ebbn894().s[5]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_1u7ebbn894().s[6]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_1u7ebbn894().s[7]++;
    cy.get('.btn').click();
    cov_1u7ebbn894().s[8]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/transactions');
  });
  cov_1u7ebbn894().s[9]++;
  it('View TransactionHistory for a single post', () => {
    cov_1u7ebbn894().f[3]++;
    cov_1u7ebbn894().s[10]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_1u7ebbn894().s[11]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_1u7ebbn894().s[12]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_1u7ebbn894().s[13]++;
    cy.get('.btn').click();
    cov_1u7ebbn894().s[14]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/transactions');
    cov_1u7ebbn894().s[15]++;
    cy.get('tbody > :nth-child(2) > :nth-child(8) > a > .fa').click();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYW5zYWN0aW9uc0hpc3Rvcnkuc3BlYy5qcyJdLCJuYW1lcyI6WyJDeXByZXNzIiwib24iLCJlcnIiLCJydW5uYWJsZSIsImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0IiwiZ2V0IiwidHlwZSIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxPQUFPLENBQUNDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxDQUFDQyxHQUFELEVBQU1DLFFBQU4sS0FBbUI7QUFBQTtBQUFBO0FBQ2hEO0FBQ0E7QUFDQSxTQUFPLEtBQVA7QUFDRCxDQUpIOztBQUtJQyxRQUFRLENBQUMsbURBQUQsRUFBc0QsTUFBTTtBQUFBO0FBQUE7QUFDbEVDLEVBQUFBLEVBQUUsQ0FBQyxzQ0FBRCxFQUEwQyxNQUFNO0FBQUE7QUFBQTtBQUNoREMsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsMERBQVQ7QUFEZ0Q7QUFFaERELElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLCtCQUFQLEVBQXdDQyxJQUF4QyxDQUE2QyxrQkFBN0M7QUFGZ0Q7QUFHaERILElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLCtCQUFQLEVBQXdDQyxJQUF4QyxDQUE2QyxPQUE3QztBQUhnRDtBQUloREgsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sTUFBUCxFQUFlRSxLQUFmO0FBSmdEO0FBS2hESixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyx1RUFBVDtBQUVELEdBUEMsQ0FBRjtBQURrRTtBQVNsRUYsRUFBQUEsRUFBRSxDQUFDLDJDQUFELEVBQStDLE1BQU07QUFBQTtBQUFBO0FBQ3JEQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUywwREFBVDtBQURxRDtBQUVyREQsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLENBQTZDLGtCQUE3QztBQUZxRDtBQUdyREgsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLENBQTZDLE9BQTdDO0FBSHFEO0FBSXJESCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTyxNQUFQLEVBQWVFLEtBQWY7QUFKcUQ7QUFLckRKLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLHVFQUFUO0FBTHFEO0FBTXJERCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTyxpREFBUCxFQUEwREUsS0FBMUQ7QUFFRCxHQVJDLENBQUY7QUFTRCxDQWxCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVHJhbnNhY3Rpb25zSGlzdG9yeS5zcGVjLmpzIGNyZWF0ZWQgd2l0aCBDeXByZXNzXG4vL1xuLy8gU3RhcnQgd3JpdGluZyB5b3VyIEN5cHJlc3MgdGVzdHMgYmVsb3chXG4vLyBJZiB5b3UncmUgdW5mYW1pbGlhciB3aXRoIGhvdyBDeXByZXNzIHdvcmtzLFxuLy8gY2hlY2sgb3V0IHRoZSBsaW5rIGJlbG93IGFuZCBsZWFybiBob3cgdG8gd3JpdGUgeW91ciBmaXJzdCB0ZXN0OlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dyaXRpbmctZmlyc3QtdGVzdFxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJDeXByZXNzXCIvPlxuQ3lwcmVzcy5vbigndW5jYXVnaHQ6ZXhjZXB0aW9uJywgKGVyciwgcnVubmFibGUpID0+IHtcbiAgICAvLyByZXR1cm5pbmcgZmFsc2UgaGVyZSBwcmV2ZW50cyBDeXByZXNzIGZyb21cbiAgICAvLyBmYWlsaW5nIHRoZSB0ZXN0XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pO1xuICAgIGRlc2NyaWJlKCdBZGRpcyBFdmVudCBBcnJhbmdlciBUcmFuc2FjdGlvbkhpc3RvcnkgcGFnZSB0ZXN0JywgKCkgPT4geyAgIFxuICAgICAgaXQoJ1RyYW5zYWN0aW9uSGlzdG9yeSBwYWdlIGlzIGRpc3BsYXllZCcgLCAoKSA9PiB7XG4gICAgICAgIGN5LnZpc2l0KCdodHRwczovL2FkZGlzZXZlbnRhcnJhbmdlcnMuZmdzeXN0ZW0ubmV0L2luZGV4LnBocC9sb2dpbicpIFxuICAgICAgICBjeS5nZXQoJzpudGgtY2hpbGQoNCkgPiAuZm9ybS1jb250cm9sJykudHlwZShcImZyYW5vbEBnbWFpbC5jb21cIilcbiAgICAgICAgY3kuZ2V0KCc6bnRoLWNoaWxkKDUpID4gLmZvcm0tY29udHJvbCcpLnR5cGUoXCJhZG1pblwiKVxuICAgICAgICBjeS5nZXQoJy5idG4nKS5jbGljaygpICBcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vYWRkaXNldmVudGFycmFuZ2Vycy5mZ3N5c3RlbS5uZXQvaW5kZXgucGhwL2FkbWluL3RyYW5zYWN0aW9ucycpXG5cbiAgICAgIH0pO1xuICAgICAgaXQoJ1ZpZXcgVHJhbnNhY3Rpb25IaXN0b3J5IGZvciBhIHNpbmdsZSBwb3N0JyAsICgpID0+IHtcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vYWRkaXNldmVudGFycmFuZ2Vycy5mZ3N5c3RlbS5uZXQvaW5kZXgucGhwL2xvZ2luJykgXG4gICAgICAgIGN5LmdldCgnOm50aC1jaGlsZCg0KSA+IC5mb3JtLWNvbnRyb2wnKS50eXBlKFwiZnJhbm9sQGdtYWlsLmNvbVwiKVxuICAgICAgICBjeS5nZXQoJzpudGgtY2hpbGQoNSkgPiAuZm9ybS1jb250cm9sJykudHlwZShcImFkbWluXCIpXG4gICAgICAgIGN5LmdldCgnLmJ0bicpLmNsaWNrKCkgIFxuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvYWRtaW4vdHJhbnNhY3Rpb25zJylcbiAgICAgICAgY3kuZ2V0KCd0Ym9keSA+IDpudGgtY2hpbGQoMikgPiA6bnRoLWNoaWxkKDgpID4gYSA+IC5mYScpLmNsaWNrKClcblxuICAgICAgfSk7XG4gICAgfSk7ICAiXX0=