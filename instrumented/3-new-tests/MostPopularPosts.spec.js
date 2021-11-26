function cov_g5qlmxylh() {
  var path = "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\MostPopularPosts.spec.js";
  var hash = "d3b32c95e7c1c5d50b2e3bd8733619102f6a9501";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\MostPopularPosts.spec.js",
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
          line: 32,
          column: 7
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
          column: 89
        }
      },
      "9": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "10": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 76
        }
      },
      "11": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 72
        }
      },
      "12": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 61
        }
      },
      "13": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 30
        }
      },
      "14": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 89
        }
      },
      "15": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 73
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
            column: 64
          },
          end: {
            line: 14,
            column: 65
          }
        },
        loc: {
          start: {
            line: 14,
            column: 70
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 48
          },
          end: {
            line: 15,
            column: 49
          }
        },
        loc: {
          start: {
            line: 15,
            column: 54
          },
          end: {
            line: 22,
            column: 7
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 48
          },
          end: {
            line: 23,
            column: 49
          }
        },
        loc: {
          start: {
            line: 23,
            column: 54
          },
          end: {
            line: 30,
            column: 7
          }
        },
        line: 23
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
    hash: "d3b32c95e7c1c5d50b2e3bd8733619102f6a9501"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_g5qlmxylh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_g5qlmxylh();
cov_g5qlmxylh().s[0]++;
// MostPopularPosts.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  cov_g5qlmxylh().f[0]++;
  cov_g5qlmxylh().s[1]++;
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
cov_g5qlmxylh().s[2]++;
describe('Addis Event Arranger MostPopularPosts page test', () => {
  cov_g5qlmxylh().f[1]++;
  cov_g5qlmxylh().s[3]++;
  it('PostPopularPosts page is displayed', () => {
    cov_g5qlmxylh().f[2]++;
    cov_g5qlmxylh().s[4]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_g5qlmxylh().s[5]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_g5qlmxylh().s[6]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_g5qlmxylh().s[7]++;
    cy.get('.btn').click();
    cov_g5qlmxylh().s[8]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/popularitems');
  });
  cov_g5qlmxylh().s[9]++;
  it('view a particular mostpopular post', () => {
    cov_g5qlmxylh().f[3]++;
    cov_g5qlmxylh().s[10]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_g5qlmxylh().s[11]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_g5qlmxylh().s[12]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_g5qlmxylh().s[13]++;
    cy.get('.btn').click();
    cov_g5qlmxylh().s[14]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/popularitems');
    cov_g5qlmxylh().s[15]++;
    cy.get('tbody > :nth-child(2) > :nth-child(3) > a > .fa').click();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vc3RQb3B1bGFyUG9zdHMuc3BlYy5qcyJdLCJuYW1lcyI6WyJDeXByZXNzIiwib24iLCJlcnIiLCJydW5uYWJsZSIsImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0IiwiZ2V0IiwidHlwZSIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxPQUFPLENBQUNDLEVBQVIsQ0FBVyxvQkFBWCxFQUFpQyxDQUFDQyxHQUFELEVBQU1DLFFBQU4sS0FBbUI7QUFBQTtBQUFBO0FBQ2hEO0FBQ0E7QUFDQSxTQUFPLEtBQVA7QUFDRCxDQUpIOztBQUtJQyxRQUFRLENBQUMsaURBQUQsRUFBb0QsTUFBTTtBQUFBO0FBQUE7QUFDaEVDLEVBQUFBLEVBQUUsQ0FBQyxvQ0FBRCxFQUF3QyxNQUFNO0FBQUE7QUFBQTtBQUM5Q0MsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsMERBQVQ7QUFEOEM7QUFFOUNELElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLCtCQUFQLEVBQXdDQyxJQUF4QyxDQUE2QyxrQkFBN0M7QUFGOEM7QUFHOUNILElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLCtCQUFQLEVBQXdDQyxJQUF4QyxDQUE2QyxPQUE3QztBQUg4QztBQUk5Q0gsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sTUFBUCxFQUFlRSxLQUFmO0FBSjhDO0FBSzlDSixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyx1RUFBVDtBQUVELEdBUEMsQ0FBRjtBQURnRTtBQVNoRUYsRUFBQUEsRUFBRSxDQUFDLG9DQUFELEVBQXdDLE1BQU07QUFBQTtBQUFBO0FBQzlDQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUywwREFBVDtBQUQ4QztBQUU5Q0QsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLENBQTZDLGtCQUE3QztBQUY4QztBQUc5Q0gsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLENBQTZDLE9BQTdDO0FBSDhDO0FBSTlDSCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTyxNQUFQLEVBQWVFLEtBQWY7QUFKOEM7QUFLOUNKLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLHVFQUFUO0FBTDhDO0FBTTlDRCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTyxpREFBUCxFQUEwREUsS0FBMUQ7QUFDRCxHQVBDLENBQUY7QUFTRCxDQWxCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9zdFBvcHVsYXJQb3N0cy5zcGVjLmpzIGNyZWF0ZWQgd2l0aCBDeXByZXNzXG4vL1xuLy8gU3RhcnQgd3JpdGluZyB5b3VyIEN5cHJlc3MgdGVzdHMgYmVsb3chXG4vLyBJZiB5b3UncmUgdW5mYW1pbGlhciB3aXRoIGhvdyBDeXByZXNzIHdvcmtzLFxuLy8gY2hlY2sgb3V0IHRoZSBsaW5rIGJlbG93IGFuZCBsZWFybiBob3cgdG8gd3JpdGUgeW91ciBmaXJzdCB0ZXN0OlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dyaXRpbmctZmlyc3QtdGVzdFxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJDeXByZXNzXCIvPlxuXG5DeXByZXNzLm9uKCd1bmNhdWdodDpleGNlcHRpb24nLCAoZXJyLCBydW5uYWJsZSkgPT4ge1xuICAgIC8vIHJldHVybmluZyBmYWxzZSBoZXJlIHByZXZlbnRzIEN5cHJlc3MgZnJvbVxuICAgIC8vIGZhaWxpbmcgdGhlIHRlc3RcbiAgICByZXR1cm4gZmFsc2VcbiAgfSk7XG4gICAgZGVzY3JpYmUoJ0FkZGlzIEV2ZW50IEFycmFuZ2VyIE1vc3RQb3B1bGFyUG9zdHMgcGFnZSB0ZXN0JywgKCkgPT4geyAgIFxuICAgICAgaXQoJ1Bvc3RQb3B1bGFyUG9zdHMgcGFnZSBpcyBkaXNwbGF5ZWQnICwgKCkgPT4ge1xuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvbG9naW4nKSBcbiAgICAgICAgY3kuZ2V0KCc6bnRoLWNoaWxkKDQpID4gLmZvcm0tY29udHJvbCcpLnR5cGUoXCJmcmFub2xAZ21haWwuY29tXCIpXG4gICAgICAgIGN5LmdldCgnOm50aC1jaGlsZCg1KSA+IC5mb3JtLWNvbnRyb2wnKS50eXBlKFwiYWRtaW5cIilcbiAgICAgICAgY3kuZ2V0KCcuYnRuJykuY2xpY2soKSAgICAgIFxuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvYWRtaW4vcG9wdWxhcml0ZW1zJylcbiAgICAgICAgXG4gICAgICB9KTtcbiAgICAgIGl0KCd2aWV3IGEgcGFydGljdWxhciBtb3N0cG9wdWxhciBwb3N0JyAsICgpID0+IHtcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vYWRkaXNldmVudGFycmFuZ2Vycy5mZ3N5c3RlbS5uZXQvaW5kZXgucGhwL2xvZ2luJykgXG4gICAgICAgIGN5LmdldCgnOm50aC1jaGlsZCg0KSA+IC5mb3JtLWNvbnRyb2wnKS50eXBlKFwiZnJhbm9sQGdtYWlsLmNvbVwiKVxuICAgICAgICBjeS5nZXQoJzpudGgtY2hpbGQoNSkgPiAuZm9ybS1jb250cm9sJykudHlwZShcImFkbWluXCIpXG4gICAgICAgIGN5LmdldCgnLmJ0bicpLmNsaWNrKCkgICAgICBcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vYWRkaXNldmVudGFycmFuZ2Vycy5mZ3N5c3RlbS5uZXQvaW5kZXgucGhwL2FkbWluL3BvcHVsYXJpdGVtcycpXG4gICAgICAgIGN5LmdldCgndGJvZHkgPiA6bnRoLWNoaWxkKDIpID4gOm50aC1jaGlsZCgzKSA+IGEgPiAuZmEnKS5jbGljaygpXG4gICAgICB9KTtcbiAgICAgIFxuICAgIH0pOyAgICBcbiJdfQ==