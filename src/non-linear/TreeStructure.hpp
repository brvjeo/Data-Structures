#ifndef TreeStructure_hpp
#define TreeStructure_hpp

#include <stdio.h>

namespace DataStructures {
template<class T1, class T2> class TreeStructure {
protected:
    virtual void insert(T1 key, T2 value) = 0;
    virtual void remove() = 0;
    virtual T2* find() = 0;
};
};
#endif
