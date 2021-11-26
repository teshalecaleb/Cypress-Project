function cov_1795rts7s() {
  var path = "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\MostRatingOrganizers.spec.js";
  var hash = "02ab88bab198ab16d38e00e3662d2b25b217bc77";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\MostRatingOrganizers.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "1": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 16
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 22,
          column: 9
        }
      },
      "4": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 76
        }
      },
      "5": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 72
        }
      },
      "6": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 61
        }
      },
      "7": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 30
        }
      },
      "8": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 84
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 34
          }
        },
        loc: {
          start: {
            line: 9,
            column: 52
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 67
          },
          end: {
            line: 14,
            column: 68
          }
        },
        loc: {
          start: {
            line: 14,
            column: 73
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 51
          },
          end: {
            line: 15,
            column: 52
          }
        },
        loc: {
          start: {
            line: 15,
            column: 57
          },
          end: {
            line: 22,
            column: 7
          }
        },
        line: 15
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "02ab88bab198ab16d38e00e3662d2b25b217bc77"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1795rts7s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1795rts7s();
cov_1795rts7s().s[0]++;
// MostRatingOrganizers.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  cov_1795rts7s().f[0]++;
  cov_1795rts7s().s[1]++;
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
cov_1795rts7s().s[2]++;
describe('Addis Event Arranger MostRatingOranizers page test', () => {
  cov_1795rts7s().f[1]++;
  cov_1795rts7s().s[3]++;
  it('MostRatingOranizers page is displayed', () => {
    cov_1795rts7s().f[2]++;
    cov_1795rts7s().s[4]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_1795rts7s().s[5]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_1795rts7s().s[6]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_1795rts7s().s[7]++;
    cy.get('.btn').click();
    cov_1795rts7s().s[8]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/ratings');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vc3RSYXRpbmdPcmdhbml6ZXJzLnNwZWMuanMiXSwibmFtZXMiOlsiQ3lwcmVzcyIsIm9uIiwiZXJyIiwicnVubmFibGUiLCJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsImdldCIsInR5cGUiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEtBQW1CO0FBQUE7QUFBQTtBQUNoRDtBQUNBO0FBQ0EsU0FBTyxLQUFQO0FBQ0QsQ0FKSDs7QUFLSUMsUUFBUSxDQUFDLG9EQUFELEVBQXVELE1BQU07QUFBQTtBQUFBO0FBQ25FQyxFQUFBQSxFQUFFLENBQUMsdUNBQUQsRUFBMkMsTUFBTTtBQUFBO0FBQUE7QUFDakRDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLDBEQUFUO0FBRGlEO0FBRWpERCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTywrQkFBUCxFQUF3Q0MsSUFBeEMsQ0FBNkMsa0JBQTdDO0FBRmlEO0FBR2pESCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTywrQkFBUCxFQUF3Q0MsSUFBeEMsQ0FBNkMsT0FBN0M7QUFIaUQ7QUFJakRILElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLE1BQVAsRUFBZUUsS0FBZjtBQUppRDtBQUtqREosSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsa0VBQVQ7QUFFRCxHQVBDLENBQUY7QUFRTCxDQVRXLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb3N0UmF0aW5nT3JnYW5pemVycy5zcGVjLmpzIGNyZWF0ZWQgd2l0aCBDeXByZXNzXG4vL1xuLy8gU3RhcnQgd3JpdGluZyB5b3VyIEN5cHJlc3MgdGVzdHMgYmVsb3chXG4vLyBJZiB5b3UncmUgdW5mYW1pbGlhciB3aXRoIGhvdyBDeXByZXNzIHdvcmtzLFxuLy8gY2hlY2sgb3V0IHRoZSBsaW5rIGJlbG93IGFuZCBsZWFybiBob3cgdG8gd3JpdGUgeW91ciBmaXJzdCB0ZXN0OlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dyaXRpbmctZmlyc3QtdGVzdFxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJDeXByZXNzXCIvPlxuXG5DeXByZXNzLm9uKCd1bmNhdWdodDpleGNlcHRpb24nLCAoZXJyLCBydW5uYWJsZSkgPT4ge1xuICAgIC8vIHJldHVybmluZyBmYWxzZSBoZXJlIHByZXZlbnRzIEN5cHJlc3MgZnJvbVxuICAgIC8vIGZhaWxpbmcgdGhlIHRlc3RcbiAgICByZXR1cm4gZmFsc2VcbiAgfSk7XG4gICAgZGVzY3JpYmUoJ0FkZGlzIEV2ZW50IEFycmFuZ2VyIE1vc3RSYXRpbmdPcmFuaXplcnMgcGFnZSB0ZXN0JywgKCkgPT4geyAgIFxuICAgICAgaXQoJ01vc3RSYXRpbmdPcmFuaXplcnMgcGFnZSBpcyBkaXNwbGF5ZWQnICwgKCkgPT4ge1xuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvbG9naW4nKSBcbiAgICAgICAgY3kuZ2V0KCc6bnRoLWNoaWxkKDQpID4gLmZvcm0tY29udHJvbCcpLnR5cGUoXCJmcmFub2xAZ21haWwuY29tXCIpXG4gICAgICAgIGN5LmdldCgnOm50aC1jaGlsZCg1KSA+IC5mb3JtLWNvbnRyb2wnKS50eXBlKFwiYWRtaW5cIilcbiAgICAgICAgY3kuZ2V0KCcuYnRuJykuY2xpY2soKSAgICAgIFxuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvYWRtaW4vcmF0aW5ncycpXG4gICAgICAgIFxuICAgICAgfSk7XG59KTsgIl19