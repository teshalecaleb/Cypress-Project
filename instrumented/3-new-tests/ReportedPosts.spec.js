function cov_isqbjqecm() {
  var path = "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\ReportedPosts.spec.js";
  var hash = "8f8135c426fc04c72c9b20950e61bd1899dddce6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\cypress_test\\cypress\\integration\\3-new-tests\\ReportedPosts.spec.js",
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
          line: 32,
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
          line: 31,
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
      },
      "16": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 36
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
            column: 61
          },
          end: {
            line: 13,
            column: 62
          }
        },
        loc: {
          start: {
            line: 13,
            column: 67
          },
          end: {
            line: 32,
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
            column: 45
          },
          end: {
            line: 14,
            column: 46
          }
        },
        loc: {
          start: {
            line: 14,
            column: 51
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
            column: 47
          },
          end: {
            line: 22,
            column: 48
          }
        },
        loc: {
          start: {
            line: 22,
            column: 53
          },
          end: {
            line: 31,
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
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8f8135c426fc04c72c9b20950e61bd1899dddce6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_isqbjqecm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_isqbjqecm();
cov_isqbjqecm().s[0]++;
// ReportedPosts.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
  cov_isqbjqecm().f[0]++;
  cov_isqbjqecm().s[1]++;
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
cov_isqbjqecm().s[2]++;
describe('Addis Event Arranger ReportedPosts page test', () => {
  cov_isqbjqecm().f[1]++;
  cov_isqbjqecm().s[3]++;
  it('ReportedPosts page is displayed', () => {
    cov_isqbjqecm().f[2]++;
    cov_isqbjqecm().s[4]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_isqbjqecm().s[5]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_isqbjqecm().s[6]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_isqbjqecm().s[7]++;
    cy.get('.btn').click();
    cov_isqbjqecm().s[8]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_reports');
  });
  cov_isqbjqecm().s[9]++;
  it('Edit ReportedPost by diabling it ', () => {
    cov_isqbjqecm().f[3]++;
    cov_isqbjqecm().s[10]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/login');
    cov_isqbjqecm().s[11]++;
    cy.get(':nth-child(4) > .form-control').type("franol@gmail.com");
    cov_isqbjqecm().s[12]++;
    cy.get(':nth-child(5) > .form-control').type("admin");
    cov_isqbjqecm().s[13]++;
    cy.get('.btn').click();
    cov_isqbjqecm().s[14]++;
    cy.visit('https://addiseventarrangers.fgsystem.net/index.php/admin/item_reports');
    cov_isqbjqecm().s[15]++;
    cy.get('tbody > :nth-child(2) > :nth-child(4) > a > .fa').click();
    cov_isqbjqecm().s[16]++;
    cy.get('button.btn').click();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9ydGVkUG9zdHMuc3BlYy5qcyJdLCJuYW1lcyI6WyJDeXByZXNzIiwib24iLCJlcnIiLCJydW5uYWJsZSIsImRlc2NyaWJlIiwiaXQiLCJjeSIsInZpc2l0IiwiZ2V0IiwidHlwZSIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE9BQU8sQ0FBQ0MsRUFBUixDQUFXLG9CQUFYLEVBQWlDLENBQUNDLEdBQUQsRUFBTUMsUUFBTixLQUFtQjtBQUFBO0FBQUE7QUFDaEQ7QUFDQTtBQUNBLFNBQU8sS0FBUDtBQUNELENBSkg7O0FBS0lDLFFBQVEsQ0FBQyw4Q0FBRCxFQUFpRCxNQUFNO0FBQUE7QUFBQTtBQUM3REMsRUFBQUEsRUFBRSxDQUFDLGlDQUFELEVBQXFDLE1BQU07QUFBQTtBQUFBO0FBQzNDQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUywwREFBVDtBQUQyQztBQUUzQ0QsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLENBQTZDLGtCQUE3QztBQUYyQztBQUczQ0gsSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sK0JBQVAsRUFBd0NDLElBQXhDLENBQTZDLE9BQTdDO0FBSDJDO0FBSTNDSCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTyxNQUFQLEVBQWVFLEtBQWY7QUFKMkM7QUFLM0NKLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLHVFQUFUO0FBRUQsR0FQQyxDQUFGO0FBRDZEO0FBUzdERixFQUFBQSxFQUFFLENBQUMsbUNBQUQsRUFBdUMsTUFBTTtBQUFBO0FBQUE7QUFDN0NDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLDBEQUFUO0FBRDZDO0FBRTdDRCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTywrQkFBUCxFQUF3Q0MsSUFBeEMsQ0FBNkMsa0JBQTdDO0FBRjZDO0FBRzdDSCxJQUFBQSxFQUFFLENBQUNFLEdBQUgsQ0FBTywrQkFBUCxFQUF3Q0MsSUFBeEMsQ0FBNkMsT0FBN0M7QUFINkM7QUFJN0NILElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLE1BQVAsRUFBZUUsS0FBZjtBQUo2QztBQUs3Q0osSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMsdUVBQVQ7QUFMNkM7QUFNN0NELElBQUFBLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPLGlEQUFQLEVBQTBERSxLQUExRDtBQU42QztBQU83Q0osSUFBQUEsRUFBRSxDQUFDRSxHQUFILENBQU8sWUFBUCxFQUFxQkUsS0FBckI7QUFFRCxHQVRDLENBQUY7QUFVRCxDQW5CTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVwb3J0ZWRQb3N0cy5zcGVjLmpzIGNyZWF0ZWQgd2l0aCBDeXByZXNzXG4vL1xuLy8gU3RhcnQgd3JpdGluZyB5b3VyIEN5cHJlc3MgdGVzdHMgYmVsb3chXG4vLyBJZiB5b3UncmUgdW5mYW1pbGlhciB3aXRoIGhvdyBDeXByZXNzIHdvcmtzLFxuLy8gY2hlY2sgb3V0IHRoZSBsaW5rIGJlbG93IGFuZCBsZWFybiBob3cgdG8gd3JpdGUgeW91ciBmaXJzdCB0ZXN0OlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dyaXRpbmctZmlyc3QtdGVzdFxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJDeXByZXNzXCIvPlxuQ3lwcmVzcy5vbigndW5jYXVnaHQ6ZXhjZXB0aW9uJywgKGVyciwgcnVubmFibGUpID0+IHtcbiAgICAvLyByZXR1cm5pbmcgZmFsc2UgaGVyZSBwcmV2ZW50cyBDeXByZXNzIGZyb21cbiAgICAvLyBmYWlsaW5nIHRoZSB0ZXN0XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pO1xuICAgIGRlc2NyaWJlKCdBZGRpcyBFdmVudCBBcnJhbmdlciBSZXBvcnRlZFBvc3RzIHBhZ2UgdGVzdCcsICgpID0+IHsgICBcbiAgICAgIGl0KCdSZXBvcnRlZFBvc3RzIHBhZ2UgaXMgZGlzcGxheWVkJyAsICgpID0+IHtcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vYWRkaXNldmVudGFycmFuZ2Vycy5mZ3N5c3RlbS5uZXQvaW5kZXgucGhwL2xvZ2luJykgXG4gICAgICAgIGN5LmdldCgnOm50aC1jaGlsZCg0KSA+IC5mb3JtLWNvbnRyb2wnKS50eXBlKFwiZnJhbm9sQGdtYWlsLmNvbVwiKVxuICAgICAgICBjeS5nZXQoJzpudGgtY2hpbGQoNSkgPiAuZm9ybS1jb250cm9sJykudHlwZShcImFkbWluXCIpXG4gICAgICAgIGN5LmdldCgnLmJ0bicpLmNsaWNrKCkgIFxuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvYWRtaW4vaXRlbV9yZXBvcnRzJylcblxuICAgICAgfSk7XG4gICAgICBpdCgnRWRpdCBSZXBvcnRlZFBvc3QgYnkgZGlhYmxpbmcgaXQgJyAsICgpID0+IHtcbiAgICAgICAgY3kudmlzaXQoJ2h0dHBzOi8vYWRkaXNldmVudGFycmFuZ2Vycy5mZ3N5c3RlbS5uZXQvaW5kZXgucGhwL2xvZ2luJykgXG4gICAgICAgIGN5LmdldCgnOm50aC1jaGlsZCg0KSA+IC5mb3JtLWNvbnRyb2wnKS50eXBlKFwiZnJhbm9sQGdtYWlsLmNvbVwiKVxuICAgICAgICBjeS5nZXQoJzpudGgtY2hpbGQoNSkgPiAuZm9ybS1jb250cm9sJykudHlwZShcImFkbWluXCIpXG4gICAgICAgIGN5LmdldCgnLmJ0bicpLmNsaWNrKCkgIFxuICAgICAgICBjeS52aXNpdCgnaHR0cHM6Ly9hZGRpc2V2ZW50YXJyYW5nZXJzLmZnc3lzdGVtLm5ldC9pbmRleC5waHAvYWRtaW4vaXRlbV9yZXBvcnRzJylcbiAgICAgICAgY3kuZ2V0KCd0Ym9keSA+IDpudGgtY2hpbGQoMikgPiA6bnRoLWNoaWxkKDQpID4gYSA+IC5mYScpLmNsaWNrKClcbiAgICAgICAgY3kuZ2V0KCdidXR0b24uYnRuJykuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB9KTtcbiAgICB9KTsgICAgICAgIl19