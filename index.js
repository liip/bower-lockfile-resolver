var fs = require('fs-extra-promise');
var tmp = require('tmp');

/**
 * Called by Bower
 * @param bower Bower
 * @returns {{match: Function, releases: Function, fetch: Function}}
 */
module.exports = function resolver (bower) {
    'use strict';

    return {
        match: match,
        locate: locate,
        releases: releases,
        fetch: fetch
    };

    // Match method tells whether resolver supports given source
    // It can return either boolean or promise of boolean
    function match(source) {
        return source.indexOf('svn://') === 0
    }

    // Can resolve or normalize sources, like:
    // "jquery" => "git://github.com/jquery/jquery.git"
    function locate(source) {
        return source;
    }

    // Allows to list available versions of given source.
    // Bower chooses matching release and passes it to "fetch"
    function releases(source) {
        return [
            { target: 'v1.0.0', version: '1.0.0' },
            { target: 'v1.0.1', version: '1.0.1' }
        ]
    }


    // It downloads package and extracts it to temporary directory
    // You can use npm's "tmp" package to tmp directories
    // See the "Resolver API" section for details on this method
    function fetch(endpoint, cached) {
        var tempDir = tmp.dirSync();

        // If cached version of package exists, re-use it
        if (cached && cached.version) {
            return;
        }

        // ... download package to tempDir

        return {
            tempPath: tempDir.name,
            removeIgnores: true
        }
    }
};
